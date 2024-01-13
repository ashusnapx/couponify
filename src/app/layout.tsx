// Import necessary modules and styles
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// Load Inter font
const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600','700'],
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Boost Your Skills with Exclusive Coding Ninjas Coupon Code: LEHUT',
  description:
    'Unlock maximum discounts on Coding Ninjas courses using the special coupon code LEHUT. Explore a world of learning opportunities with Coding Ninjas.',
  keywords:
    'coding ninjas, coding ninjas coupon code, coding ninjas discounts, coding ninjas referral code, learn programming, online courses, LEHUT coupon code, coding ninjas LEHUT, best coding ninjas coupon, maximum coding ninjas discount, programming education',
  // ogTitle: 'Exclusive Coding Ninjas Coupon Code: LEHUT for Maximum Discounts',
  // ogDescription:
  //   "Apply the special Coding Ninjas Coupon Code: LEHUT and get maximum discounts on any course. Guaranteed savings up to ₹5,000. Don't miss out on this exclusive offer!",
  // ogUrl: 'https://yourwebsite.com', // Replace with your website URL
  // ogSiteName: 'Coding Ninjas Coupon Premium',
  // ogImage: 'https://yourwebsite.com/images/og-image.jpg', // Replace with your OG image URL
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='antialiased grainy md:overflow-hidden'>
      <head>
        {/* Add favicon links for various devices */}
        <link rel='icon' href='/images/favicon.ico' sizes='any' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />

        {/* Add other metadata tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#ffffff' />
        {/* Add other meta tags as needed */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
