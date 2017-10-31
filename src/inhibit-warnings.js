const chalk = require('chalk');
const path = require('path');

const utilities = require('./utilities');

function updateProject (project) {
	console.log(chalk.gray(`${chalk.green('✔')} [inhibit-warnings]: in ${path.dirname(path.relative(process.cwd(), project.filepath))}`));

	project.addBuildProperty('GCC_WARN_INHIBIT_ALL_WARNINGS', 'YES');
	project.addBuildProperty('RUN_CLANG_STATIC_ANALYZER', 'NO');

	const attributes = project.getFirstProject().firstProject.attributes;
	attributes.LastUpgradeCheck = 9999;

	return true;
}

module.exports = function findAndFix () {
// Find all of the pbxproj files we care about.
	const pattern = './node_modules/**/*.xcodeproj/project.pbxproj';

	utilities.updateProjectsMatchingGlob(pattern, (err, project) => {
		if (err) {
			return console.error(chalk.red('⃠ [inhibit-warnings]: Error!', err));
		}

		return updateProject(project);
	});
};
