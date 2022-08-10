// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n
  ## Description \n
  ${data.description}\n\n
  ## Installation \n
  ${data.installation}\n\n
  ## Usage \n
  ${data.usageInformation} \n\n
  ## Contribution Guidelines \n
  ${data.contributionGuidelines}\n\n
  ## Test Instructions \n
  ${data.testInstructions}
`;
   return data;
}

module.exports = generateMarkdown;
