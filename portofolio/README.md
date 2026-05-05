# Portfolio Website

This is a personal portfolio website created for Jefferson Reynan M. Jayme, inspired by the design of http://kenngumonan.com.

## Features

- Responsive design using Tailwind CSS
- Smooth scrolling navigation
- Animated skill bars
- Contact form (requires Web3Forms API key)
- Mobile-friendly menu

## Setup

1. Clone or download the files to your local machine.
2. Open `index.html` in a web browser to view the site.

## Customization

### Adding Your Profile Image

- Replace `profile.png` in the root directory with your own profile picture.
- Recommended size: 400x400 pixels or similar square aspect ratio.

### Updating Content

Edit the HTML in `index.html` to update:
- Personal information in the Hero and About sections
- Skills percentages and descriptions
- Education, experience, awards, etc.
- Portfolio projects (replace placeholder images and links)
- Contact information (email, LinkedIn, GitHub links)

### Contact Form

The contact form uses Web3Forms for handling submissions. To enable it:
1. Sign up at https://web3forms.com/
2. Get your access key
3. Replace `YOUR_ACCESS_KEY_HERE` in the form with your actual key

### Map

The embedded map currently shows a location in the Philippines. Update the iframe src to your preferred location by:
1. Go to Google Maps
2. Search for your location
3. Click "Share" > "Embed a map"
4. Copy the iframe code and replace the existing one

## Deployment

To deploy this static website:
- Upload all files to a web hosting service (e.g., GitHub Pages, Netlify, Vercel)
- Ensure `index.html` is in the root directory

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (vanilla)
- Google Fonts (Inter)
- Web3Forms (for contact form)

## License

This project is for personal use. Feel free to modify and adapt as needed.