# Smith School of Business - Web Developer - Coding Challenge by Simran Jain

Team-Page is a coding challenge designed and developed by Simran Jain.
Please open the **index.html** file in any of the supported browsers to view the webpage.

Github Repo: https://github.com/jainsimran/team-page

## Technology Used

Besides HTML5, JavaScript, and CSS, I have used the following 3rd party libraries as per the requirements.

- JQuery
- Bootstrap V 4.0

## Design and Development

The team page follows a responsive layout leveraging Bootstrap's grid system.

### Accessibility

I followed WCAG's AA guideline in accordance with the University standards for accessibility:

- Used **aria** attributes such as **aria-label**, **aria-described** by, **role** etc when needed.
- Used accessible colors from the color palette. I used [this website](https://webaim.org/resources/contrastchecker/) to ensure I picked the accessible colors.
- Used semantic HTML tags and also Bootstrap provides accessibility as well.
- Ensured proper tabbing focus styling for keyboard use.

### Responsive Layout

Teams page is responsive on all layouts.

- Used Grids to manipulate the number of coaches displayed in 1 row.
- Different animation and display techniques to the **Read More** button on mobile and desktop.
- Navigation is different on mobile and desktop, which comes for free with Bootstrap.

### Flexible Code

Instead of hard-coding 5 professors in HTML file, I chose to model their information in following format in a data file:

```
{
    name: 'Valerie Bartlett',
    email: 'valerie@queensu.ca',
    image: 'Headshot-Valerie_Bartlett.jpg',
    shortBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    bio: 'Morbi orci quam, sodales a risus non, sagittis euismod enim. Integer efficitur dolor urna, a rhoncus odio posuere euismod. Integer finibus, massa id placerat mollis, sapien lectus convallis urna, vitae fermentum enim eros at mi. Nam non massa lacinia, efficitur quam tempus, tincidunt orci. Vestibulum convallis nibh placerat nisi tempus, sed dignissim tortor viverra. Praesent luctus nibh in mi volutpat, quis sagittis risus rutrum. Mauris placerat rhoncus nibh vel molestie. Phasellus quis vestibulum mauris. Aenean ut orci ullamcorper, dignissim lorem ac, ornare risus.'
}
```

With this approach, my code can easily plugin with external data source like an API, or CDN, or databases. Changing data is much easier now.

## Browser Support

This project has been tested across the latest versions of the following browsers:

- Chrome
- Firefoxw
- Safari.

## Additional Notes

I followed Smith's Brand standards with the following exception:

### Rules for CSS - Naming Convention

I followed Bootstrap's naming convention instead of Smith's Brand standards because it did not make sense for me to have 2 different naming conventions in the same project.
