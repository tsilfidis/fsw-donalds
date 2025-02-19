/*
  Warnings:

  - You are about to drop the column `updateAte` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `updateAte` on the `OrderProduct` table. All the data in the column will be lost.
  - You are about to drop the column `updateAte` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `consumptionMethod` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ConsumptionMethod" AS ENUM ('TAKEAWAY', 'DINE_IN');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "updateAte",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "consumptionMethod",
ADD COLUMN     "consumptionMethod" "ConsumptionMethod" NOT NULL;

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "updateAte",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "updateAte",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ConsumptionMetyhod";
