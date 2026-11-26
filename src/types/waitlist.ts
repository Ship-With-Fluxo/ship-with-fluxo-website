export type WaitlistPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  fleetSize?: string;
  /** Honeypot: real users never see or fill this. Bots do. */
  website?: string;
};
