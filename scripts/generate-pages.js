import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the directory where pages will be stored
const pagesDir = path.join(__dirname, 'src', 'pages');

// Ensure the pages directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Define all the pages to create
const pages = [
  {
    name: 'Privacy',
    title: 'Privacy Policy',
    description: 'Your data is safe with us.',
    buttonText: 'Back to Home',
    buttonLink: '/'
  },
  {
    name: 'Pricing',
    title: 'Pricing Plans',
    description: 'Choose the plan that fits your needs.',
    buttonText: 'Get Started',
    buttonLink: '/register'
  },
  {
    name: 'Login',
    title: 'Login',
    description: 'Access your account.',
    buttonText: 'Sign In',
    buttonLink: '/dashboard'
  },
  {
    name: 'Register',
    title: 'Create Account',
    description: 'Join our platform today.',
    buttonText: 'Register',
    buttonLink: '/dashboard'
  },
  {
    name: 'ResetPassword',
    title: 'Reset Password',
    description: 'Recover your account access.',
    buttonText: 'Reset',
    buttonLink: '/login'
  },
  {
    name: 'Dashboard',
    title: 'Dashboard',
    description: 'Manage your account and services.',
    buttonText: 'View Details',
    buttonLink: '/user-details'
  },
  {
    name: 'UserDetails',
    title: 'User Profile',
    description: 'Manage your personal information.',
    buttonText: 'Update Profile',
    buttonLink: '/dashboard'
  },
  {
    name: 'Wallet',
    title: 'Your Wallet',
    description: 'Manage your payment methods and transactions.',
    buttonText: 'Add Funds',
    buttonLink: '/dashboard'
  },
  {
    name: 'APIDocs',
    title: 'API Documentation',
    description: 'Learn how to integrate with our services.',
    buttonText: 'Try API',
    buttonLink: '/dashboard'
  }
];

// Template for all pages
const generatePageContent = (page) => {
  return `const ${page.name} = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold">${page.title}</h1>
      <p className="mt-2 text-lg">${page.description}</p>
      <a href="${page.buttonLink}" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        ${page.buttonText}
      </a>
    </div>
  </div>
);

export default ${page.name};
`;
};

// Create each page file
pages.forEach(page => {
  const filePath = path.join(pagesDir, `${page.name}.jsx`);
  fs.writeFileSync(filePath, generatePageContent(page));
  console.log(`Created ${filePath}`);
});

// Also create the Landing page (which already exists but for completeness)
const landingPage = {
  name: 'Landing',
  title: 'SaaS Boilerplate',
  description: 'Build faster with a pre-made stack.',
  buttonText: 'Get Started',
  buttonLink: '/register'
};

const landingFilePath = path.join(pagesDir, 'Landing.jsx');
fs.writeFileSync(landingFilePath, generatePageContent(landingPage));
console.log(`Created ${landingFilePath}`);

console.log('All pages created successfully!');

// Now you can run this script to generate the pages in the specified directory.
// To run this script, use the command:
// node scripts/generate-pages.js
// Make sure to adjust the paths and imports as necessary based on your project structure.