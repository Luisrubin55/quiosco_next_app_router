/*
  Warnings:

  - Added the required column `quantity` to the `OderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OderProducts" ADD COLUMN     "quantity" INTEGER NOT NULL;
