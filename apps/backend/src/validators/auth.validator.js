const { z } = require("zod");

const emailSchema = z.string().trim().email("Valid email is required").transform((value) => value.toLowerCase());
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(72, "Password must be at most 72 characters")
  .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "Password must include at least one letter and one number");

const signupSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
    email: emailSchema,
    password: passwordSchema,
  }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

const signinSchema = z.object({
  body: z.object({
    email: emailSchema,
    password: z.string().min(1, "Password is required"),
  }),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

const refreshSchema = z.object({
  body: z
    .object({
      refreshToken: z.string().trim().optional(),
    })
    .default({}),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

const signoutSchema = z.object({
  body: z
    .object({
      refreshToken: z.string().trim().optional(),
    })
    .default({}),
  params: z.object({}).default({}),
  query: z.object({}).default({}),
});

module.exports = {
  signupSchema,
  signinSchema,
  refreshSchema,
  signoutSchema,
};
