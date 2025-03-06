/*
  Warnings:

  - The values [PUBISHED] on the enum `PostStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `number_of_dislikes` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_likes` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_dislikes` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_likes` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `avatarUrl` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommentDislikedBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommentLikedBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommentToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DislikedBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LikedBy` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `commentatorId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostStatus_new" AS ENUM ('PUBLISHED', 'UNPUBLISHED');
ALTER TABLE "posts" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "posts" ALTER COLUMN "status" TYPE "PostStatus_new" USING ("status"::text::"PostStatus_new");
ALTER TYPE "PostStatus" RENAME TO "PostStatus_old";
ALTER TYPE "PostStatus_new" RENAME TO "PostStatus";
DROP TYPE "PostStatus_old";
ALTER TABLE "posts" ALTER COLUMN "status" SET DEFAULT 'UNPUBLISHED';
COMMIT;

-- DropForeignKey
ALTER TABLE "_CommentDislikedBy" DROP CONSTRAINT "_CommentDislikedBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommentDislikedBy" DROP CONSTRAINT "_CommentDislikedBy_B_fkey";

-- DropForeignKey
ALTER TABLE "_CommentLikedBy" DROP CONSTRAINT "_CommentLikedBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommentLikedBy" DROP CONSTRAINT "_CommentLikedBy_B_fkey";

-- DropForeignKey
ALTER TABLE "_CommentToUser" DROP CONSTRAINT "_CommentToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommentToUser" DROP CONSTRAINT "_CommentToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_DislikedBy" DROP CONSTRAINT "_DislikedBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_DislikedBy" DROP CONSTRAINT "_DislikedBy_B_fkey";

-- DropForeignKey
ALTER TABLE "_LikedBy" DROP CONSTRAINT "_LikedBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_LikedBy" DROP CONSTRAINT "_LikedBy_B_fkey";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "number_of_dislikes",
DROP COLUMN "number_of_likes",
ADD COLUMN     "commentatorId" INTEGER NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "number_of_dislikes",
DROP COLUMN "number_of_likes",
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "published_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "avatarUrl";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "_CommentDislikedBy";

-- DropTable
DROP TABLE "_CommentLikedBy";

-- DropTable
DROP TABLE "_CommentToUser";

-- DropTable
DROP TABLE "_DislikedBy";

-- DropTable
DROP TABLE "_LikedBy";

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sid_key" ON "sessions"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_commentatorId_fkey" FOREIGN KEY ("commentatorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
