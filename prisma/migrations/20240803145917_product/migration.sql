-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "boycott_name" VARCHAR(255) NOT NULL,
    "boycott_image" TEXT NOT NULL,
    "alternate_name" VARCHAR(255) NOT NULL,
    "alternate_image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
