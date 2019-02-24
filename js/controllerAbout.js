angular.module('aboutController', [])
	.controller('AboutController', function($scope) {

			//team members
		$scope.members = [
			{
				name: 'Jerry Conrad',
				title: 'CEO and Founder',
				description: 'Jerry is a fun guy to work with',
				file: 'jerry_conrad'
			},
			{
				name: 'Akira Kondo',
				title: 'Creative Director',
				description: 'Our solution finder',
				file: 'akira_kondo'
			},
			{
				name: 'Paolo Segretti',
				title: 'Head of production',
				description: 'Tic tac',
				file: 'paolo_segretti'
			}
		];
	});
