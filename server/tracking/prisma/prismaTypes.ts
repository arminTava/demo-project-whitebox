import { Prisma } from "../node_modules/.prisma/client";

const CoreCalendarTypeArgs = Prisma.validator<Prisma.core_calendar_typesArgs>()(
  {}
);
export type CoreCalendarTypes = Prisma.core_calendar_typesGetPayload<
  typeof CoreCalendarTypeArgs
>;

const CoreCalendarArgs = Prisma.validator<Prisma.core_calendarArgs>()({});
export type CoreCalendarExtend =
  | (Prisma.core_calendarGetPayload<typeof CoreCalendarArgs> & {
      coreCalendarType: CoreCalendarTypes | undefined | null;
    })
  | undefined;

const CoreOfferLogArgs = Prisma.validator<Prisma.core_offers_logArgs>()({});
export type CoreOfferLog = Prisma.core_offers_logGetPayload<
  typeof CoreOfferLogArgs
>;

const CoreOfferArgs = Prisma.validator<Prisma.core_offersArgs>()({});
export type CoreOfferExtend =
  | (Prisma.core_offersGetPayload<typeof CoreOfferArgs> & {
      coreOfferLog: Array<CoreOfferLog> | undefined | null;
    })
  | undefined;
