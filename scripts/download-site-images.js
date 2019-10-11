const { projects } = require("../src/data/projects.common")
const phantom = require("phantom")

;(async function() {
  const instance = await phantom.create()
  const page = await instance.createPage()

  for (const key in projects) {
    const project = projects[key]
    await page.property("viewportSize", { width: 1440, height: 800 })
    await page.property("clipRect", {
      top: 0,
      left: 0,
      width: 1440,
      height: 800,
    })
    const status = await page.open(project.url)
    console.log(`Page opened with status [${status}].`)

    await page.render(`./src/images/${project.slug}.png`)
  }

  await instance.exit()
})()
