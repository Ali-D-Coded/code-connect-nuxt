/*
  Warnings:

  - The values [INACTIVE,DELETED] on the enum `User_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `status` ENUM('APPROVAL_PENDING', 'ACTIVE', 'BLOCKED') NOT NULL DEFAULT 'APPROVAL_PENDING';
