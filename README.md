# Vercent Technologies

Responsive Next.js website styled with Tailwind CSS. The current design takes direction from [UST](https://www.ust.com/) and its approach to [typography](https://brand.ust.com/typography), with Vercent's services, an overlapping image hero, and individual service accents. Photos and fonts are served locally.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks and production

```sh
npm run typecheck
npm run build
npm start
```

The contact form validates the sender's name, email, and project enquiry with React Hook Form and Zod. The `/api/contact` route validates submissions again and sends them through Gmail SMTP to `athul.developer.official@gmail.com`. The sender's email is set as Reply-To. Nothing is saved to a database.

## Contact email setup

Copy `.env.example` to `.env.local`, then set `GMAIL_USER` to the sending Gmail account and `GMAIL_APP_PASSWORD` to that account's app password. [Google's app password setup](https://support.google.com/accounts/answer/185833) requires 2-Step Verification. Use an app password rather than the account's regular password. Restart the development server after setting these values, and configure the same variables in your production hosting environment.

Keep `.env.local` private; it is ignored by Git. Missing credentials or SMTP failures return an error without clearing the visitor's form. A success message appears only after Gmail accepts the enquiry.

Photography: [Unsplash](https://unsplash.com/), including the architectural photograph by [Joel Filipe](https://unsplash.com/photos/architectural-structure-photography-of-glass-building-under-cloudy-sky-nEEa3_4AS10). Photos are illustrative, not representations of Vercent's staff, clients, or premises. Fonts: [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Manrope](https://fonts.google.com/specimen/Manrope), distributed under the SIL Open Font License; license files are in `src/app/fonts`.

Technology logos: [Devicon](https://github.com/devicons/devicon) (MIT; license in `public/images/DEVICON-LICENSE.txt`). Odoo and NetSuite service-card logos use the supplied PNG images. Brand marks belong to their respective owners.
