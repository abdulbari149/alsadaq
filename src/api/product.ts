import { CreateBoycottProductSchema } from "@/server/validators/product.validator";
import router from "./router";
import {
  CreateBoycottProductResponse,
  ListBoycottProductsResponse,
  UploadBoycottProductResponse,
} from "@/types/response.type";
import { normalizeError } from "./error";
import { Product } from "@prisma/client";
import { v4 } from 'uuid'
import { TabItem } from "@/types/utils.type";

const createBoycottProduct = async (data: CreateBoycottProductSchema) => {
  try {
    const response = await router.private.post<CreateBoycottProductResponse>(
      "/boycott/products",
      data
    );

    if (!response.data.success) {
      throw new Error(response?.data?.error ?? "");
    }
    return response.data.data;
  } catch (error) {
    throw normalizeError(error);
  }
};

const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("files", file);
    const response = await router.private.post<UploadBoycottProductResponse>(
      "/boycott/products/upload",
      formData
    );

    if (!response.data.success) {
      throw new Error(response?.data?.error ?? "");
    }
    return response.data.data;
  } catch (error) {
    throw normalizeError(error);
  }
};

const listBoycottProducts = async () => {
  try {
    const response = await router.public.get<ListBoycottProductsResponse>(
      "/boycott/products"
    );
    if (!response.data.success) {
      throw new Error(response.data?.error ?? "");
    }

    const productsCategoryMap = new Map<string, Omit<Product, 'deletedAt'>[]>()
    response.data.data.forEach(item => {
      if (!productsCategoryMap.has(item.category)) {
        productsCategoryMap.set(item.category, [])
      }
      const products = productsCategoryMap.get(item.category) ?? []
      productsCategoryMap.set(item.category, [...products, item])
    })

    const data: TabItem[] = []
    productsCategoryMap.forEach((value, key) => {
      const item = {
        id: v4(),
        title: key,
        value: key.toLocaleLowerCase(),
        products: value.map(i => ({
          id: v4(),
          boycott: {
            name: i.boycottName,
            image: i.boycottImage,
          },
          alternate: {
            name: i.alternateName,
            image: i.alternateImage,
          },
        }))
      }

      data.push(item);
    })
    return data;
  } catch (error) {
    throw normalizeError(error);
  }
};

const boycottProduct = {
  create: createBoycottProduct,
  upload: uploadImage,
  list: listBoycottProducts,
};

export default boycottProduct;
