/*
  Warnings:

  - You are about to drop the `KoreStatRows` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `__EFMigrationsHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth__users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth__users_sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clockodo__time_entries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cockpit_user_sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cockpit_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controlling__companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controlling__configs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controlling__offers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controlling__offers__documents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controlling__offers__submissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controlling__users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fastfield__form_submissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `installion__orders__map_infos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `installion__orders__status_infos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `offer_generator__counters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `offer_generator__offers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `offer_generator__submissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personio__departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personio__employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personio__offices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shared__key_value` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `zoho_invoices__invoices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `zoho_invoices__invoices_credit_notes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `controlling__configs` DROP FOREIGN KEY `controlling__configs_company_fkey`;

-- DropForeignKey
ALTER TABLE `controlling__configs` DROP FOREIGN KEY `controlling__configs_parent_fkey`;

-- DropForeignKey
ALTER TABLE `controlling__offers` DROP FOREIGN KEY `controlling__offers_createdBy_fkey`;

-- DropForeignKey
ALTER TABLE `controlling__offers` DROP FOREIGN KEY `controlling__offers_document_fkey`;

-- DropForeignKey
ALTER TABLE `controlling__offers` DROP FOREIGN KEY `controlling__offers_emailSentBy_fkey`;

-- DropForeignKey
ALTER TABLE `controlling__offers__submissions` DROP FOREIGN KEY `controlling__offers__submissions_offer_fkey`;

-- DropForeignKey
ALTER TABLE `controlling__users` DROP FOREIGN KEY `controlling__users_company_fkey`;

-- DropForeignKey
ALTER TABLE `controlling__users` DROP FOREIGN KEY `controlling__users_id_fkey`;

-- DropForeignKey
ALTER TABLE `offer_generator__submissions` DROP FOREIGN KEY `offer_generator__submissions_submittedBy_fkey`;

-- DropForeignKey
ALTER TABLE `personio__employees` DROP FOREIGN KEY `personio__employees_ibfk_1`;

-- DropForeignKey
ALTER TABLE `personio__employees` DROP FOREIGN KEY `personio__employees_ibfk_2`;

-- DropTable
DROP TABLE `KoreStatRows`;

-- DropTable
DROP TABLE `Movements`;

-- DropTable
DROP TABLE `__EFMigrationsHistory`;

-- DropTable
DROP TABLE `auth__users`;

-- DropTable
DROP TABLE `auth__users_sessions`;

-- DropTable
DROP TABLE `clockodo__time_entries`;

-- DropTable
DROP TABLE `cockpit_user_sessions`;

-- DropTable
DROP TABLE `cockpit_users`;

-- DropTable
DROP TABLE `controlling__companies`;

-- DropTable
DROP TABLE `controlling__configs`;

-- DropTable
DROP TABLE `controlling__offers`;

-- DropTable
DROP TABLE `controlling__offers__documents`;

-- DropTable
DROP TABLE `controlling__offers__submissions`;

-- DropTable
DROP TABLE `controlling__users`;

-- DropTable
DROP TABLE `fastfield__form_submissions`;

-- DropTable
DROP TABLE `installion__orders__map_infos`;

-- DropTable
DROP TABLE `installion__orders__status_infos`;

-- DropTable
DROP TABLE `offer_generator__counters`;

-- DropTable
DROP TABLE `offer_generator__offers`;

-- DropTable
DROP TABLE `offer_generator__submissions`;

-- DropTable
DROP TABLE `personio__departments`;

-- DropTable
DROP TABLE `personio__employees`;

-- DropTable
DROP TABLE `personio__offices`;

-- DropTable
DROP TABLE `shared__key_value`;

-- DropTable
DROP TABLE `zoho_invoices__invoices`;

-- DropTable
DROP TABLE `zoho_invoices__invoices_credit_notes`;

-- CreateTable
CREATE TABLE `core_admins` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` CHAR(25) NOT NULL,
    `userType` ENUM('admin', 'agent', 'multi_installateur') NOT NULL DEFAULT 'agent',
    `departmentType` ENUM('manager', 'worker', 'installer', 'applicant', 'none') NOT NULL DEFAULT 'none',
    `salutation` VARCHAR(15) NOT NULL DEFAULT 'Herr',
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `image` VARCHAR(250) NULL,
    `phone` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NOT NULL,
    `jobTitle` VARCHAR(100) NULL,
    `installionMember` BOOLEAN NOT NULL DEFAULT false,
    `team` VARCHAR(100) NULL,
    `hasCalendar` BOOLEAN NOT NULL DEFAULT false,
    `finishedOffersVisibility` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_admins_idx_userid`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_calendar` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `itemId` CHAR(25) NOT NULL,
    `memberId` CHAR(25) NULL,
    `offerId` CHAR(25) NULL,
    `categoryId` CHAR(25) NULL,
    `userId` VARCHAR(255) NOT NULL,
    `text` VARCHAR(255) NOT NULL,
    `comment` VARCHAR(255) NOT NULL,
    `start_date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `end_date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isBinding` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_calendar_idx_isdelet_memberi_categor_start`(`isDeleted`, `memberId`, `categoryId`, `start_date`),
    INDEX `core_calendar_idx_isdeleted_start_date`(`isDeleted`, `start_date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_calendar_holidays` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `title` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) NOT NULL,
    `note` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_calendar_types` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryId` CHAR(25) NOT NULL,
    `memberId` CHAR(25) NULL,
    `title` VARCHAR(150) NOT NULL,
    `type` ENUM('user', 'department', 'global') NOT NULL DEFAULT 'user',
    `position` VARCHAR(15) NOT NULL DEFAULT '999',
    `color` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_types_idx_categoryid`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_contacts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contactId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `salutation` VARCHAR(200) NULL,
    `firstName` VARCHAR(100) NULL,
    `lastName` VARCHAR(200) NULL,
    `phone` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `jobTitle` VARCHAR(100) NULL,
    `notes` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_gewerke` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `gewerkeId` CHAR(25) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `category` CHAR(25) NOT NULL,
    `formType` ENUM('default') NOT NULL DEFAULT 'default',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_gewerke_categories` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryId` CHAR(25) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `position` VARCHAR(10) NOT NULL DEFAULT '9999',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_member_documents` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `memberId` CHAR(25) NULL,
    `documentId` CHAR(25) NULL,
    `url` VARCHAR(250) NULL,
    `filename` VARCHAR(250) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_members` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `memberId` CHAR(25) NULL,
    `legacyCompanyId` VARCHAR(100) NULL,
    `legacyUserId` VARCHAR(100) NULL,
    `companyName` VARCHAR(200) NULL,
    `companyType` ENUM('auftraggeber', 'installateur') NOT NULL DEFAULT 'auftraggeber',
    `installionMember` BOOLEAN NOT NULL DEFAULT false,
    `isDepartment` BOOLEAN NOT NULL DEFAULT false,
    `address` VARCHAR(100) NULL,
    `zip` VARCHAR(10) NULL,
    `city` VARCHAR(100) NULL,
    `locationLat` VARCHAR(100) NULL,
    `locationLng` VARCHAR(100) NULL,
    `geoProcessed` BOOLEAN NOT NULL DEFAULT false,
    `phone` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `website` VARCHAR(100) NULL,
    `salutation` VARCHAR(200) NULL,
    `firstName` VARCHAR(100) NULL,
    `lastName` VARCHAR(200) NULL,
    `image` VARCHAR(250) NULL,
    `jobTitle` VARCHAR(200) NULL,
    `notes` TEXT NULL,
    `salary` VARCHAR(25) NULL,
    `radius` VARCHAR(25) NULL DEFAULT '1000',
    `numberWorkers` VARCHAR(25) NULL,
    `finishedOffersVisibility` BOOLEAN NOT NULL DEFAULT false,
    `isConfirmed` BOOLEAN NOT NULL DEFAULT false,
    `userAgreement` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_members_idx_isconfi_isdelet_company_memberi`(`isConfirmed`, `isDeleted`, `companyType`, `memberId`),
    INDEX `core_members_idx_isconfirme_isdeleted_memberid`(`isConfirmed`, `isDeleted`, `memberId`),
    INDEX `core_members_idx_memberid`(`memberId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_notifications` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `notificationId` CHAR(25) NULL,
    `offerId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `userId` CHAR(25) NULL,
    `title` TEXT NULL,
    `description` TEXT NULL,
    `status` VARCHAR(50) NULL,
    `type` ENUM('note-add', 'note-edit', 'note-remove', 'task-add', 'task-edit', 'task-remove', 'task-complete', 'task-uncomplete', 'document-add', 'document-edit', 'document-remove', 'status-change') NOT NULL,
    `typeItemId` CHAR(25) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `isReadMatched` BOOLEAN NOT NULL DEFAULT false,
    `isArchivedMatched` BOOLEAN NOT NULL DEFAULT false,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offer_tasks` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NULL,
    `taskId` CHAR(25) NULL,
    `title` VARCHAR(200) NULL,
    `description` TEXT NULL,
    `taskRecipient` VARCHAR(100) NULL,
    `responsibleUserId` CHAR(25) NULL,
    `responsibleRecipientUserId` CHAR(25) NULL,
    `priority` VARCHAR(50) NULL DEFAULT 'normal',
    `visibility` VARCHAR(100) NULL,
    `isPrivate` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `deadlineAt` DATETIME(0) NULL,
    `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    `completedAt` DATETIME(0) NULL,
    `completedBy` CHAR(25) NULL,
    `completedByUserId` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offer_tasks_automatic` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `taskId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `title` VARCHAR(200) NULL,
    `description` TEXT NULL,
    `triggerValue` VARCHAR(100) NULL,
    `taskRecipient` VARCHAR(100) NULL,
    `recipientMemberId` CHAR(25) NULL,
    `deadlineDays` VARCHAR(100) NULL,
    `priority` VARCHAR(50) NULL DEFAULT 'normal',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `legacyId` VARCHAR(50) NOT NULL,
    `legacyCompanyId` VARCHAR(50) NOT NULL,
    `offerId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `responsibleUserId` CHAR(25) NULL,
    `responsibleMatchedUserId` CHAR(25) NULL,
    `offerNumber` VARCHAR(50) NOT NULL,
    `offerType` VARCHAR(150) NOT NULL,
    `title` VARCHAR(200) NULL,
    `description` TEXT NOT NULL,
    `address` VARCHAR(100) NULL,
    `zip` VARCHAR(10) NULL,
    `city` VARCHAR(100) NULL,
    `locationLat` VARCHAR(100) NULL,
    `locationLng` VARCHAR(100) NULL,
    `image` VARCHAR(250) NULL,
    `orderValue` VARCHAR(100) NULL,
    `orderValueTotal` VARCHAR(100) NULL,
    `kwp` VARCHAR(100) NULL,
    `modules` VARCHAR(100) NULL,
    `customerPhone` VARCHAR(100) NULL,
    `customerMobile` VARCHAR(100) NULL,
    `customerEmail` VARCHAR(100) NULL,
    `customerSalutation` VARCHAR(100) NULL,
    `customerFirstName` VARCHAR(100) NULL,
    `customerLastName` VARCHAR(200) NULL,
    `customerInvoiceValue` VARCHAR(100) NULL,
    `customerNotes` TEXT NOT NULL,
    `offerDateType` ENUM('fixed', 'relative') NULL,
    `offerDateStart` DATETIME(0) NULL,
    `offerDateEnd` DATETIME(0) NULL,
    `offerDateRelative` ENUM('30', '90', '180', 'flexible') NULL,
    `offerDateCompleted` DATETIME(0) NULL,
    `vorOrtTermin` DATETIME(0) NULL,
    `zaehlersetzungTermin` DATETIME(0) NULL,
    `ACMontageTermin` DATETIME(0) NULL,
    `DCMontageTermin` DATETIME(0) NULL,
    `gewerkId` CHAR(25) NULL,
    `leistungId` CHAR(25) NULL,
    `memberIdMatched` CHAR(25) NULL,
    `notes` TEXT NULL,
    `invoiceReference` TEXT NULL,
    `status` ENUM('active', 'disabled', 'cancelled') NOT NULL DEFAULT 'active',
    `projectStatus` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `matchedAt` DATETIME(0) NULL,
    `matchedBy` CHAR(25) NULL,
    `isMatched` BOOLEAN NOT NULL DEFAULT false,
    `isMatchedConfirmed` BOOLEAN NOT NULL DEFAULT false,
    `matchedConfirmedAt` DATETIME(0) NULL,
    `isFinished` BOOLEAN NOT NULL DEFAULT false,
    `finishedAt` DATETIME(0) NULL,
    `finishedBy` CHAR(25) NULL,
    `isFinalized` BOOLEAN NOT NULL DEFAULT false,
    `finalizedAt` DATETIME(0) NULL,
    `finalizedBy` CHAR(25) NULL,
    `followUpAt` DATETIME(0) NULL,
    `isAfterSalesFinished` BOOLEAN NOT NULL DEFAULT false,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_offers_idx_createdat`(`createdAt`),
    INDEX `core_offers_idx_iscompl_isdelet_ismatch_isafter`(`isCompleted`, `isDeleted`, `isMatchedConfirmed`, `isAfterSalesFinished`),
    INDEX `core_offers_idx_iscomplete_isdeleted_memberidma`(`isCompleted`, `isDeleted`, `memberIdMatched`),
    INDEX `core_offers_idx_memberidmatched`(`memberIdMatched`),
    INDEX `core_offers_idx_offerid`(`offerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_documents` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NULL,
    `documentId` CHAR(25) NULL,
    `packageId` CHAR(25) NULL,
    `url` TEXT NULL,
    `thumb_url` TEXT NULL,
    `filename` TEXT NULL,
    `position` VARCHAR(50) NULL DEFAULT '999',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_offers_documents_idx_packageid`(`packageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_documents_packages` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NULL,
    `packageId` CHAR(25) NULL,
    `packageAutomaticId` VARCHAR(50) NULL,
    `packageTitle` VARCHAR(250) NULL,
    `type` ENUM('global', 'member') NOT NULL DEFAULT 'global',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_documents_packages_automatic` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `packageId` CHAR(25) NULL,
    `title` VARCHAR(200) NULL,
    `categoryId` CHAR(25) NULL,
    `categoryTitle` VARCHAR(200) NULL,
    `type` ENUM('global', 'member') NOT NULL DEFAULT 'global',
    `memberId` CHAR(25) NULL,
    `position` INTEGER NULL DEFAULT 999,
    `documentNameFormat` VARCHAR(200) NULL,
    `visibilityAuftraggeber` BOOLEAN NOT NULL DEFAULT true,
    `visibilityInstallateur` BOOLEAN NOT NULL DEFAULT true,
    `isUebergabeOrdner` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_documents_packages_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` CHAR(25) NULL,
    `categoryTitle` VARCHAR(200) NULL,
    `position` INTEGER NULL DEFAULT 999,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_log` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NULL,
    `userId` CHAR(25) NULL,
    `matchedMemberId` CHAR(25) NULL,
    `note` TEXT NULL,
    `type` ENUM('add', 'edit', 'delete', 'restore', 'match', 'unmatch', 'complete', 'tender', 'finalize', 'task-add', 'task-edit', 'task-completed', 'task-uncompleted', 'task-removed', 'vot-koordinierung', 'vot-dokumentation', 'beauftragung', 'koordinierung', 'montage', 'inbetriebnahme', 'zaehlersetzung') NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isHidden` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_montagemappe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NULL,
    `documentId` CHAR(25) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_montagemappe_values` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NULL,
    `documentId` CHAR(25) NULL,
    `name` VARCHAR(150) NULL,
    `value` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_netzanmeldung` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stepId` CHAR(25) NULL,
    `offerId` CHAR(25) NULL,
    `description` TEXT NULL,
    `isDone` BOOLEAN NOT NULL DEFAULT false,
    `completedAt` DATETIME(0) NULL,
    `completedBy` CHAR(25) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_netzanmeldung_steps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stepTitle` VARCHAR(250) NULL,
    `isRequired` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_notes` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `noteId` CHAR(25) NULL,
    `offerId` CHAR(25) NULL,
    `userId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `matchedMemberId` CHAR(25) NULL,
    `note` TEXT NULL,
    `attachmentUrl` TEXT NULL,
    `type` ENUM('note', 'match', 'unmatch', 'complete', 'finalize') NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isSend` BOOLEAN NOT NULL DEFAULT false,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `isEdited` BOOLEAN NOT NULL DEFAULT false,
    `isHidden` BOOLEAN NOT NULL DEFAULT false,
    `isPrivate` BOOLEAN NOT NULL DEFAULT false,
    `isPrivateType` VARCHAR(50) NULL,
    `recipientAuftraggeber` BOOLEAN NOT NULL DEFAULT false,
    `recipientInstallateur` BOOLEAN NOT NULL DEFAULT false,
    `recipientCustomer` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_offers_notes_idx_ishidden`(`isHidden`),
    INDEX `core_offers_notes_idx_ishidden_offerid`(`isHidden`, `offerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_positions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `positionId` CHAR(25) NOT NULL,
    `offerId` CHAR(25) NOT NULL,
    `title` VARCHAR(250) NULL,
    `statusType` VARCHAR(250) NULL,
    `price` VARCHAR(250) NULL,
    `reason` VARCHAR(250) NULL,
    `reasonReportedTo` VARCHAR(250) NULL,
    `reasonReportedFrom` VARCHAR(250) NULL,
    `reasonReportedAt` VARCHAR(250) NULL,
    `reasonReportedPer` VARCHAR(250) NULL,
    `approvalReportedFrom` VARCHAR(250) NULL,
    `approvalReportedAt` VARCHAR(250) NULL,
    `approvalReportedPer` VARCHAR(250) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `offerTaskId` CHAR(25) NOT NULL,
    `offerId` CHAR(25) NOT NULL,
    `taskId` CHAR(25) NOT NULL,
    `note` TEXT NULL,
    `isNotRequired` BOOLEAN NOT NULL DEFAULT false,
    `isNotRequiredNote` TEXT NULL,
    `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_tasks_documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NULL,
    `taskId` CHAR(25) NULL,
    `documentId` CHAR(25) NULL,
    `url` TEXT NULL,
    `thumb_url` TEXT NULL,
    `filename` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_offers_tasks_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logId` CHAR(25) NULL,
    `offerId` CHAR(25) NULL,
    `taskId` CHAR(25) NULL,
    `documentId` CHAR(25) NULL,
    `userId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `matchedMemberId` CHAR(25) NULL,
    `note` TEXT NULL,
    `type` ENUM('add', 'edit', 'delete', 'complete', 'note') NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_ratings` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `memberId` CHAR(25) NOT NULL,
    `ratedMemberId` CHAR(25) NOT NULL,
    `rating` VARCHAR(5) NULL,
    `type` VARCHAR(50) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`id`),
    INDEX `rel_member_offer_i_idx_offerid_memberid`(`ratedMemberId`, `memberId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_sub_users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `salutation` VARCHAR(200) NULL,
    `firstName` VARCHAR(100) NULL,
    `lastName` VARCHAR(200) NULL,
    `phone` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `website` VARCHAR(100) NULL,
    `jobTitle` VARCHAR(100) NULL,
    `team` VARCHAR(100) NULL,
    `image` VARCHAR(250) NULL,
    `isApplicant` BOOLEAN NOT NULL DEFAULT false,
    `isWorker` BOOLEAN NOT NULL DEFAULT false,
    `isInstaller` BOOLEAN NOT NULL DEFAULT false,
    `isDepartmentManager` BOOLEAN NOT NULL DEFAULT false,
    `isManager` BOOLEAN NOT NULL DEFAULT false,
    `isPrincipal` BOOLEAN NOT NULL DEFAULT false,
    `isMultiInstallateur` BOOLEAN NOT NULL DEFAULT false,
    `hasCalendar` BOOLEAN NOT NULL DEFAULT false,
    `finishedOffersVisibility` BOOLEAN NOT NULL DEFAULT false,
    `isHidden` BOOLEAN NOT NULL DEFAULT false,
    `isConfirmed` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_system_emails` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryId` CHAR(25) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `value` VARCHAR(150) NOT NULL,
    `subject` VARCHAR(250) NOT NULL,
    `description` TEXT NOT NULL,
    `placeholders` TEXT NOT NULL,
    `template` ENUM('default') NOT NULL DEFAULT 'default',
    `salutationType` VARCHAR(150) NOT NULL DEFAULT 'sehr_geehrte',
    `buttonPrimary` VARCHAR(150) NULL,
    `buttonSecondary` VARCHAR(150) NULL,
    `copyEmailAddress` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_system_emails_categories` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryId` CHAR(25) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `userGroup` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_system_sms` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryId` CHAR(25) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `value` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `placeholders` TEXT NOT NULL,
    `salutationType` VARCHAR(150) NOT NULL DEFAULT 'sehr_geehrte',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_system_sms_categories` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryId` CHAR(25) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `userGroup` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_system_task_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taskTypeId` CHAR(25) NOT NULL,
    `title` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_system_tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taskId` CHAR(25) NOT NULL,
    `taskTypeId` CHAR(25) NULL,
    `title` VARCHAR(150) NOT NULL,
    `description` TEXT NULL,
    `gewerkeId` CHAR(25) NULL,
    `memberId` CHAR(25) NULL,
    `handlingByUserGroup` VARCHAR(150) NULL,
    `invoiceRelevantType` VARCHAR(150) NULL,
    `invoicePercentageValue` VARCHAR(150) NULL,
    `isMemberSpecific` BOOLEAN NOT NULL DEFAULT false,
    `invoiceBalance` BOOLEAN NOT NULL DEFAULT false,
    `tutorialUrl` VARCHAR(150) NOT NULL,
    `sendMailAccounting` BOOLEAN NOT NULL DEFAULT false,
    `sendMailAuftraggeber` BOOLEAN NOT NULL DEFAULT false,
    `sendMailEndkunde` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_tag_categories` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tagCategoryId` CHAR(25) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `position` VARCHAR(10) NOT NULL DEFAULT '9999',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tagId` CHAR(25) NOT NULL,
    `title` VARCHAR(50) NOT NULL DEFAULT '',
    `category` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL DEFAULT '',
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `core_users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` CHAR(25) NOT NULL,
    `userType` ENUM('admin', 'agent', 'multi_installateur', 'auftraggeber', 'installateur', 'subuser') NOT NULL,
    `departmentType` ENUM('manager', 'worker', 'none') NOT NULL DEFAULT 'none',
    `email` VARCHAR(100) NOT NULL,
    `password` TEXT NOT NULL,
    `passwordClear` VARCHAR(100) NOT NULL,
    `passwordChanged` BOOLEAN NOT NULL DEFAULT false,
    `sessions` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL DEFAULT '',
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `lastLoginAt` DATETIME(0) NULL,
    `lastActivityAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `invitationSend` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `core_users_idx_userid`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_blacklist` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `blacklistId` VARCHAR(50) NULL,
    `email` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `import_members` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `memberId` CHAR(25) NULL,
    `legacyCompanyId` VARCHAR(100) NULL,
    `legacyUserId` VARCHAR(100) NULL,
    `companyName` VARCHAR(200) NULL,
    `companyType` ENUM('auftraggeber', 'installateur') NOT NULL DEFAULT 'auftraggeber',
    `address` VARCHAR(100) NULL,
    `zip` VARCHAR(10) NULL,
    `city` VARCHAR(100) NULL,
    `locationLat` VARCHAR(100) NULL,
    `locationLng` VARCHAR(100) NULL,
    `geoProcessed` BOOLEAN NOT NULL DEFAULT false,
    `phone` VARCHAR(100) NULL,
    `mobile` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `website` VARCHAR(100) NULL,
    `salutation` VARCHAR(200) NULL,
    `firstName` VARCHAR(100) NULL,
    `lastName` VARCHAR(200) NULL,
    `image` VARCHAR(250) NULL,
    `notes` TEXT NULL,
    `salary` VARCHAR(25) NULL,
    `radius` VARCHAR(25) NULL DEFAULT '1000',
    `numberWorkers` VARCHAR(25) NULL,
    `isConfirmed` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NOT NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,
    `deletedAt` DATETIME(0) NULL,
    `deletedBy` CHAR(25) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `gewerke` VARCHAR(250) NULL,
    `leistungen` VARCHAR(250) NOT NULL DEFAULT '0',
    `isImported` BOOLEAN NOT NULL DEFAULT false,
    `isExisting` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_member_gewerke` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `memberId` CHAR(25) NOT NULL,
    `gewerkeId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_member_leistungen` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `memberId` CHAR(25) NOT NULL,
    `leistungId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `rel_member_leistun_idx_leistungid_memberid`(`leistungId`, `memberId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_member_offer_interested` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NOT NULL,
    `memberId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `isExcluded` BOOLEAN NOT NULL DEFAULT false,
    `isInterested` BOOLEAN NOT NULL DEFAULT false,
    `mailSend` BOOLEAN NOT NULL DEFAULT false,
    `mailSendAt` DATETIME(0) NULL,
    `token` CHAR(50) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `rel_member_offer_i_idx_isinterested_memberid`(`isInterested`, `memberId`),
    INDEX `rel_member_offer_i_idx_offerid_memberid`(`offerId`, `memberId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_member_tags` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `memberId` CHAR(25) NOT NULL,
    `tagId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_offer_gewerke` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NOT NULL,
    `gewerkeId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_offer_leistungen` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `offerId` CHAR(25) NOT NULL,
    `leistungId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_system_emails_persons_muted` (
    `memberId` CHAR(25) NULL,
    `categoryId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_system_sms_persons_muted` (
    `memberId` CHAR(25) NULL,
    `categoryId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rel_system_tasks_parenting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parentTaskId` CHAR(25) NOT NULL,
    `taskId` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` CHAR(25) NULL,
    `modifiedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `modifiedBy` CHAR(25) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
