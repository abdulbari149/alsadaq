import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import path, { extname } from 'path'
import env from '@/config/env.config.mjs'
import handleError from '@/utils/handle-error'
const pump = promisify(pipeline)
const mkdir = promisify(fs.mkdir)
const access = promisify(fs.access)

export async function POST(req: NextRequest) {
  try {
    const dir = 'products'
    const publicDir = path.resolve('../../../../../../public');
    try {
      await access(`${publicDir}/${dir}`, fs.constants.R_OK | fs.constants.W_OK)
    } catch (error) {
      try {
        await mkdir(`${publicDir}/${dir}`, { recursive: true })
      } catch (error) { }
    }

    const formData = await req.formData()
    const files = formData.getAll('files') as File[]
    const images = []
    for (const file of files) {
      const fileName = `${Date.now()}${extname(file.name)}`

      const relativeFilePath = `${dir}/${fileName}`
      const stream = file.stream()
      await pump(
        stream as any,
        fs.createWriteStream(`public/${relativeFilePath}`),
      )
      images.push({
        url: `${env.API_BASE_URL.replace('/api', '')}/${relativeFilePath}`,
        size: file.size,
        name: file.name,
      })
    }

    return NextResponse.json({
      error: null,
      success: true,
      data: images,
    })
  } catch (e) {
    console.log(e)
    return handleError(e)
  }
}
