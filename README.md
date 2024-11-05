# 🌟 Company Portfolio SPA

Welcome to the **Company Portfolio** SPA project! This document provides an overview of the sections, content structure, technologies, and guidelines to follow for creating an engaging, modern, and responsive portfolio website. Each section is carefully planned to showcase the company's essence, from workflow and services to team and client feedback.

## 📌 Task Details
**Goal:** Create a Single Page Application (SPA) for the company's portfolio website.  
**Technology Stack:** Next.js, Tailwind CSS.

### Content Structure:
Follow these sections in order. Each numbered section represents a part of the page layout.

1. **Sticky Navbar**  
   - Features: A sticky navbar with the company's logo and navigation menus.
   - **Styling**: Use creative styles and ensure responsiveness on all devices.

2. **Sliders**  
   - Features: Auto-sliding images or content carousel for a dynamic first impression.

3. **Company Workflow / Goal / Vision**  
   - Description: Showcase the company's workflow, goals, and vision in an inspiring layout.
   - **Content**: Use relevant icons or dummy images, and descriptive text.

4. **Services**  
   - Description: Briefly describe services offered with an icon or image for each service.
   - **Content**: Use dummy data in a grid layout.

5. **Showcase**  
   - Description: Display featured work or portfolio pieces.
   - **Content**: Use dummy images and titles for project showcases.

6. **Team**  
   - Description: Introduce the team members, along with their roles and a short bio.
   - **Content**: Use placeholder images and dummy data for team members.

7. **Client Feedback**  
   - Description: A section dedicated to client testimonials.
   - **Content**: Display client names, dummy feedback text, and placeholder profile images.

8. **Pricing**  
   - Description: Showcase pricing plans or service packages with different tiers.
   - **Content**: Use dummy data for pricing tables or cards.

9. **Contact Us**  
   - Description: A form where potential clients or users can reach out.
   - **Content**: Use placeholder fields for name, email, message, and a submit button.

10. **Footer**  
    - Description: Include essential links, copyright text, and social media icons.
    - **Styling**: Ensure the footer is visually cohesive with the rest of the design.


## 📝 Content Guidelines
- **UI & UX**: Aim for a modern, sleek design with creative styling and smooth interactions.
- **Placeholder Content**: Use `Lorem Ipsum` for text descriptions and dummy images/icons where applicable.
- **Responsiveness**: Ensure the website is mobile-responsive, including the navbar.
- **Reference UI**: Check similar portfolio websites for inspiration.


## ⚙️ Project Structure

Here's the recommended folder structure:

```plaintext
├── app
│   └── (file-based routing)
├── components
│   └── (section-wise components for each part of the layout)
├── utils
│   └── constants
│       └── dummyData.js  (holds dummy data for each section as arrays of objects)
├── styles
│   └── global.css  (global CSS styles for the application)
```
## 🚀 How to Run the Application
1. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
