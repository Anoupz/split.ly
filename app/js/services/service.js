appServices.factory('BalanceService', function() {
	return {
		compute: function(sheet) {
			var friends = sheet.friends;
			var expenses = sheet.expenses;
			var balance = [];

			//Create initial array containing for each friend, the list of other friends with amount = 0
			for (var i in friends) {
				balance[i] = {_id: friends[i]._id, name: friends[i].name, owes: []};
				for (var j in friends) {
					if (i != j) {
						balance[i].owes.push({_id: friends[j]._id, name: friends[j].name, amount: 0});
					}
				}
			}

			//Compute the amount owes by each friend to each others.
			for (var i in expenses) {
				var expense = expenses[i];
				var amountPerFriend = expense.amount / expense.paid_for.length;


				for (var j in balance) {

					if (balance[j]._id == expense.paid_by) {
						for (var k in expense.paid_for) {
							for (var l in balance[j].owes) {
								if (balance[j].owes[l]._id == expense.paid_for[k]) {
									balance[j].owes[l].amount -= amountPerFriend;
								}
							}
						}
					}
					else {
						for (var k in expense.paid_for) {
							if (balance[j]._id == expense.paid_for[k]) {
								for (var l in balance[j].owes) {
									if (balance[j].owes[l]._id == expense.paid_by) {
										balance[j].owes[l].amount += amountPerFriend;
										break ;
									}
								}
							}
						}
					}
				}
			}

			//Remove negative amount
			for (var i in balance) {
				for (var j in balance[i].owes) {
					if (balance[i].owes[j].amount < 0) {
						balance[i].owes[j].amount = 0;
					}
				}
			}

			return balance;
		}

	};
});


appServices.factory('SheetsService', function($http, $q, Options) {
	return {
		create: function() {
			var deferred = $q.defer();

			$http.post(Options.baseUrl + '/sheets', {}).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		read: function(id) {
			var deferred = $q.defer();

			$http.get(Options.baseUrl + '/sheets/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		update: function(sheet) {
			var deferred = $q.defer();

			$http.put(Options.baseUrl + '/sheets', sheet).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
});


appServices.factory('FriendsService', function($http, $q, Options) {
	return {
		create: function(friend) {
			var deferred = $q.defer();

			$http.post(Options.baseUrl + '/friends', friend).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		readAllFromSheet: function(sheet_id) {
			var deferred = $q.defer();

			$http.get(Options.baseUrl + '/friends/' + sheet_id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		read: function(sheet_id, id) {
			var deferred = $q.defer();

			$http.get(Options.baseUrl + '/friends/' + sheet_id + '/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		update: function(friend) {
			var deferred = $q.defer();

			$http.put(Options.baseUrl + '/friends', friend).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		delete: function(sheet_id, id) {
			var deferred = $q.defer();

			$http.delete(Options.baseUrl + '/friends/' + sheet_id + '/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
});


appServices.factory('ExpensesService', function($http, $q, Options) {
	return {
		create: function(expense) {
			var deferred = $q.defer();

			$http.post(Options.baseUrl + '/expenses', expense).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		readAllFromSheet: function(sheet_id) {
			var deferred = $q.defer();

			$http.get(Options.baseUrl + '/expenses/' + sheet_id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		read: function(sheet_id, id) {
			var deferred = $q.defer();

			$http.get(Options.baseUrl + '/expenses/' + sheet_id + '/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		update: function(expense) {
			var deferred = $q.defer();

			$http.put(Options.baseUrl + '/expenses', expense).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		delete: function(sheet_id, id) {
			var deferred = $q.defer();

			$http.delete(Options.baseUrl + '/expenses/' + sheet_id + '/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
});