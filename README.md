# Next.js 13 Complete walkthrough

This is a project from my [Next.js 13 Crash Course](https://youtu.be/Y6KDk5iyrYE). It uses the newer features such as:

- App directory
- New routing system
- Next Fonts
- React Server Components
- Data Fetching
- Layouts
- Metadata API
- API Route Handlers
- loading.js Page
- and more

<img src="./public/screen.jpg" width="500">

## Usage

Install dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build the project:

```bash
npm run build
# or
yarn build
```

Run production build:

```bash
npm run start
# or
yarn start
```

## Notes:
- Everything inside the app directory will be a server component (by default)
- Any component created outside of the app directory will be a client component
- The fetch api got updated, no-cache (SSR normal behaviour), force-cache (static site generation), revalidate option (ISR: revalidation after certain amout of time)
- We cannot use these techniques only until we tell next js how to render the initial pages
- When we try to access to a page that is not statically generated at build time the fallback option will be used and the page will be server rendered if the resource asked is found else it will return a 404.
- For the pages statically generated we can add ISR on top of it by revalidating the pages content after X seconds.
- Inside a page we can export this variable dynamicParams = true to tell next js to try to server side a page, the problem is that we are going to get unexpected behaviour 
so we can use the notFound from next/navigation
- When we are running in dev mode pages are going always to be server side rendered. To test the speed of the statically generated pages run the build then start to test the app in prod mode.
- We use client components when we need interactivty, event listeners, hooks, browser apis, ...
- The error component is a client side component
- Group routes are a way to group routes based on a certain criteria (like roles foe example), the folders created (usersn admin) are kinda invisible to next js
if you create a page.tsx or layout.tsx it will leads to confusion like behaviour. (users)/layout.tsx is the same as the root/layout.tsx and same for 
the (admin), (admin)/layout.tsx is the same as the root/layout.tsx. And at one level only one layout can be used. (same goes for the other files).
To conclude the (admin) and (users) are just a way to group modules and route protection is provided by next js. If we want to have a layout for each module (users) and (admin) we must:
    1- Delete the root/layout
    2- Create a layout.tsx inside each module
but when it comes to the page.tsx only one is allowed at the root or (users) or (admin) folder
- Server components get blocked by their await calls
- Streaming won't block our UI, it will stream the data when it's available
