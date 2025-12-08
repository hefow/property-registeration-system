property-registration-frontend/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                       <-- Landing page
│
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── forgot-password/page.tsx
│
│   ├── dashboard/
│   │   ├── layout.tsx                 <-- Sidebar + header
│   │   ├── page.tsx                   <-- My Registrations
│   │
│   │   ├── register-property/
│   │   │   ├── page.tsx
│   │   │   ├── Step1Property.tsx
│   │   │   ├── Step2Owners.tsx
│   │   │   └── Step3Review.tsx
│   │
│   │   ├── registrations/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│
│   ├── official/
│   │   ├── dashboard/page.tsx
│   │   └── review/[id]/page.tsx
│
│   ├── registry/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│
│   └── api/
│       └── proxy/[...proxy].ts       <-- Backend proxy
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   └── PageHeader.tsx
│
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── EmptyState.tsx
│   │   └── Loader.tsx
│
│   ├── forms/
│   │   ├── PropertyForm.tsx
│   │   ├── OwnerForm.tsx
│   │   └── RegistrationReview.tsx
│
│   ├── cards/
│   │   ├── PropertyCard.tsx
│   │   ├── RegistrationCard.tsx
│   │   └── OwnerCard.tsx
│
│   └── tables/
│       ├── PropertiesTable.tsx
│       └── RegistrationsTable.tsx
│
├── context/
│   ├── AuthContext.tsx
│   └── AuthProvider.tsx
│
├── hooks/
│   ├── useAuth.ts
│   ├── useApi.ts
│   ├── useToast.ts
│   └── useProtectedRoute.ts
│
├── services/
│   ├── api.ts                       <-- axios base instance
│   ├── auth.service.ts
│   ├── registration.service.ts
│   ├── property.service.ts
│   └── owner.service.ts
│
├── types/
│   ├── user.types.ts
│   ├── property.types.ts
│   ├── registration.types.ts
│   └── owner.types.ts
│
├── middleware.ts                    <-- route protection
├── public/
│   ├── favicon.ico
│   └── logo.png
│
├── next.config.js
├── package.json
└── tsconfig.json
