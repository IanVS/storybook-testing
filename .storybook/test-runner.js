const { injectAxe, checkA11y } = require("axe-playwright");

module.exports = {
  async preRender(page, context) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    await checkA11y(
      page,
      "#root",
      {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
      },
      false,
      new SilentOnSuccessReporter()
    );
  },
};

// This is a custom reporter which does not log anything when tests pass
// Until https://github.com/abhinaba-ghosh/axe-playwright/issues/96
class SilentOnSuccessReporter {
  async report(violations) {
    const violationData = violations.map(({ id, impact, description, nodes }) => {
      return {
        id,
        impact,
        description,
        nodes: nodes.length,
      };
    });

    if (violationData.length > 0) {
      console.table(violationData);
    }
  }
}
