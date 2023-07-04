-- CreateTable
CREATE TABLE `KoreStatRows` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Kostenartentyp` LONGTEXT NOT NULL,
    `Kostenstellen` LONGTEXT NOT NULL,
    `Kostenstellen_KostenstellenNummer` LONGTEXT NOT NULL,
    `Kostenstellen_KostenstellenBezeichnung` LONGTEXT NOT NULL,
    `Kostenarten` LONGTEXT NOT NULL,
    `Kostenarten_KostenartenNummer` LONGTEXT NOT NULL,
    `Kostenarten_KostenartenBezeichnung` LONGTEXT NOT NULL,
    `Kostenträger` LONGTEXT NOT NULL,
    `Kostenträger_KostenträgerNummer` LONGTEXT NOT NULL,
    `Kostenträger_KostenträgerBezeichnung` LONGTEXT NOT NULL,
    `Wirtschaftsjahr` LONGTEXT NOT NULL,
    `Periode` DOUBLE NOT NULL,
    `Belegnummer` LONGTEXT NOT NULL,
    `Einheit` LONGTEXT NOT NULL,
    `Variator` DOUBLE NOT NULL,
    `Text` LONGTEXT NOT NULL,
    `Datum` DATETIME(6) NOT NULL,
    `Buchungscode` LONGTEXT NOT NULL,
    `KORE_Konto` LONGTEXT NOT NULL,
    `KontoSoll` LONGTEXT NOT NULL,
    `KontoSoll_KontoSollNummer` LONGTEXT NOT NULL,
    `KontoSoll_KontoSollBezeichnung` LONGTEXT NOT NULL,
    `KontoHaben` LONGTEXT NOT NULL,
    `KontoHaben_KontoHabenNummer` LONGTEXT NOT NULL,
    `KontoHaben_KontoHabenBezeichnung` LONGTEXT NOT NULL,
    `Benutzer` LONGTEXT NOT NULL,
    `Personenkonto` LONGTEXT NOT NULL,
    `Personenkonto_PersonenkontoNummer` LONGTEXT NOT NULL,
    `Personenkonto_PersonenkontoBezeichnung` LONGTEXT NOT NULL,
    `Kostenstellengruppen` LONGTEXT NOT NULL,
    `Kostenartengruppen` LONGTEXT NOT NULL,
    `Kostenträgergruppen` LONGTEXT NOT NULL,
    `Kostenstellengruppen_Bezeichnung` LONGTEXT NOT NULL,
    `Kostenartengruppen_Bezeichnung` LONGTEXT NOT NULL,
    `Kostenträgergruppen_Bezeichnung` LONGTEXT NOT NULL,
    `Betrag` DOUBLE NOT NULL,
    `Einheiten` DOUBLE NOT NULL,
    `Dokumente` LONGTEXT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movements` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `DatumZahlung` DATETIME(6) NULL,
    `BuchungBetrag` DOUBLE NULL,
    `Lieferant` LONGTEXT NOT NULL,
    `Aufwandskonto` LONGTEXT NOT NULL,
    `KontobezeichnungAufwandskonto` LONGTEXT NULL,
    `Buchungstext` LONGTEXT NOT NULL,
    `Rechnungsnummer` LONGTEXT NOT NULL,
    `Rechnungsdatum` DATETIME(6) NULL,
    `Faelligkeit` DATETIME(6) NULL,
    `GesamtBrutto` DOUBLE NULL,
    `Niederlassung` LONGTEXT NULL,
    `ProjektOderLager` LONGTEXT NOT NULL,
    `BWARubrik` INTEGER NULL,
    `PdfUrl` LONGTEXT NULL,
    `Buchungstyp` LONGTEXT NOT NULL,
    `Steuersatz` LONGTEXT NULL,
    `LieferantNiederlassung` LONGTEXT NOT NULL,
    `RechnungBrutto` DOUBLE NULL,
    `BWARubrikBezeichnung` LONGTEXT NULL,
    `SkontoBetrag` DOUBLE NULL,
    `MesoYear` INTEGER NOT NULL DEFAULT 0,
    `SteuerId` INTEGER NULL,
    `NiederlassungNr` LONGTEXT NOT NULL,
    `ProjektOderLagerNr` LONGTEXT NOT NULL,
    `LieferantName` LONGTEXT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `__EFMigrationsHistory` (
    `MigrationId` VARCHAR(150) NOT NULL,
    `ProductVersion` VARCHAR(32) NOT NULL,

    PRIMARY KEY (`MigrationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auth__users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `auth__users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auth__users_sessions` (
    `session_id` VARCHAR(128) NOT NULL,
    `expires` INTEGER UNSIGNED NOT NULL,
    `data` MEDIUMTEXT NULL,

    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clockodo__time_entries` (
    `id` INTEGER UNSIGNED NOT NULL,
    `personnelNumber` VARCHAR(15) NULL,
    `projectNumber` VARCHAR(191) NOT NULL,
    `timeLastChange` DATETIME(3) NULL,
    `timeSince` DATETIME(3) NOT NULL,
    `timeUntil` DATETIME(3) NULL,
    `duration` INTEGER NULL,
    `serviceName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cockpit_user_sessions` (
    `session_id` VARCHAR(128) NOT NULL,
    `expires` INTEGER UNSIGNED NOT NULL,
    `data` MEDIUMTEXT NULL,

    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cockpit_users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `cockpit_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controlling__companies` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controlling__configs` (
    `id` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `value` LONGTEXT NOT NULL,
    `meta` LONGTEXT NULL,
    `parent` VARCHAR(191) NULL,

    INDEX `controlling__configs_company_fkey`(`company`),
    INDEX `controlling__configs_parent_fkey`(`parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controlling__offers` (
    `id` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `document` VARCHAR(191) NULL,
    `customerEmail` VARCHAR(191) NOT NULL,
    `customerFirstName` VARCHAR(191) NULL,
    `customerLastName` VARCHAR(191) NULL,
    `company` VARCHAR(191) NOT NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `customerData` LONGTEXT NOT NULL,
    `emailSentAt` DATETIME(3) NULL,
    `emailSentBy` VARCHAR(191) NULL,

    UNIQUE INDEX `controlling__offers_document_key`(`document`),
    INDEX `controlling__offers_createdBy_fkey`(`createdBy`),
    INDEX `controlling__offers_emailSentBy_fkey`(`emailSentBy`),
    UNIQUE INDEX `controlling__offers_company_number_key`(`company`, `number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controlling__offers__documents` (
    `id` VARCHAR(191) NOT NULL,
    `googleDocument` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `controlling__offers__documents_googleDocument_key`(`googleDocument`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controlling__offers__submissions` (
    `id` VARCHAR(191) NOT NULL,
    `data` LONGTEXT NOT NULL,
    `offer` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `controlling__offers__submissions_offer_key`(`offer`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controlling__users` (
    `id` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `permissions` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `controlling__users_company_fkey`(`company`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fastfield__form_submissions` (
    `orderNumber` VARCHAR(50) NOT NULL,
    `formId` INTEGER NOT NULL,
    `data` LONGTEXT NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`orderNumber`, `formId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `installion__orders__map_infos` (
    `order` CHAR(25) NOT NULL,
    `data` TEXT NOT NULL,
    `distance` INTEGER NULL,
    `duration` INTEGER NULL,

    PRIMARY KEY (`order`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `installion__orders__status_infos` (
    `order` CHAR(25) NOT NULL,
    `complete` DATETIME(3) NULL,
    `match` DATETIME(3) NULL,
    `votKoordinierung` DATETIME(3) NULL,
    `votDokumentation` DATETIME(3) NULL,
    `beauftragung` DATETIME(3) NULL,
    `koordinierung` DATETIME(3) NULL,
    `montage` DATETIME(3) NULL,
    `zaehlersetzung` DATETIME(3) NULL,
    `inbetriebnahme` DATETIME(3) NULL,
    `finalize` DATETIME(3) NULL,

    PRIMARY KEY (`order`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offer_generator__counters` (
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offer_generator__offers` (
    `number` VARCHAR(191) NOT NULL,
    `documentId` VARCHAR(191) NOT NULL,
    `submissionId` VARCHAR(191) NOT NULL,
    `customerFirstName` VARCHAR(191) NULL,
    `customerLastName` VARCHAR(191) NULL,
    `customerEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `offer_generator__offers_documentId_key`(`documentId`),
    UNIQUE INDEX `offer_generator__offers_submissionId_key`(`submissionId`),
    PRIMARY KEY (`number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offer_generator__submissions` (
    `id` VARCHAR(191) NOT NULL,
    `submittedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `submittedBy` VARCHAR(191) NOT NULL,
    `data` LONGTEXT NOT NULL,

    INDEX `offer_generator__submissions_submittedBy_fkey`(`submittedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personio__departments` (
    `id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personio__employees` (
    `id` INTEGER UNSIGNED NOT NULL,
    `personnelNumber` VARCHAR(15) NOT NULL,
    `status` VARCHAR(15) NOT NULL,
    `employmentType` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `officeId` INTEGER UNSIGNED NOT NULL,
    `departmentId` INTEGER UNSIGNED NULL,
    `position` VARCHAR(191) NOT NULL,
    `employmentType2` VARCHAR(191) NOT NULL,
    `hireDate` DATETIME(3) NULL,
    `contractEndDate` DATETIME(3) NULL,
    `terminationDate` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `personio__employees.personnelNumber_unique`(`personnelNumber`),
    UNIQUE INDEX `personio__employees.email_unique`(`email`),
    INDEX `departmentId`(`departmentId`),
    INDEX `officeId`(`officeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personio__offices` (
    `id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shared__key_value` (
    `scope` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `value` LONGTEXT NOT NULL,

    PRIMARY KEY (`scope`, `key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zoho_invoices__invoices` (
    `id` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `orderNumber` VARCHAR(191) NULL,
    `recipient` ENUM('client', 'customer') NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `dueDate` DATE NOT NULL,
    `subTotal` DECIMAL(16, 2) NOT NULL,
    `total` DECIMAL(16, 2) NOT NULL,
    `url` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `zoho_invoices__invoices_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zoho_invoices__invoices_credit_notes` (
    `id` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `orderNumber` VARCHAR(191) NULL,
    `recipient` ENUM('client', 'customer') NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `subTotal` DECIMAL(16, 2) NOT NULL,
    `total` DECIMAL(16, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `zoho_invoices__invoices_credit_notes_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `controlling__configs` ADD CONSTRAINT `controlling__configs_company_fkey` FOREIGN KEY (`company`) REFERENCES `controlling__companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controlling__configs` ADD CONSTRAINT `controlling__configs_parent_fkey` FOREIGN KEY (`parent`) REFERENCES `controlling__configs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controlling__offers` ADD CONSTRAINT `controlling__offers_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `controlling__users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controlling__offers` ADD CONSTRAINT `controlling__offers_document_fkey` FOREIGN KEY (`document`) REFERENCES `controlling__offers__documents`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controlling__offers` ADD CONSTRAINT `controlling__offers_emailSentBy_fkey` FOREIGN KEY (`emailSentBy`) REFERENCES `controlling__users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controlling__offers__submissions` ADD CONSTRAINT `controlling__offers__submissions_offer_fkey` FOREIGN KEY (`offer`) REFERENCES `controlling__offers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controlling__users` ADD CONSTRAINT `controlling__users_company_fkey` FOREIGN KEY (`company`) REFERENCES `controlling__companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controlling__users` ADD CONSTRAINT `controlling__users_id_fkey` FOREIGN KEY (`id`) REFERENCES `auth__users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer_generator__submissions` ADD CONSTRAINT `offer_generator__submissions_submittedBy_fkey` FOREIGN KEY (`submittedBy`) REFERENCES `controlling__users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `personio__employees` ADD CONSTRAINT `personio__employees_ibfk_1` FOREIGN KEY (`officeId`) REFERENCES `personio__offices`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `personio__employees` ADD CONSTRAINT `personio__employees_ibfk_2` FOREIGN KEY (`departmentId`) REFERENCES `personio__departments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
