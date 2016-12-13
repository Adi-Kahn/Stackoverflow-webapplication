﻿define(['knockout', 'dataservice', 'postman', 'config'],
    function (ko, dataService, postman, config) {
        return function () {
            var historyList = ko.observableArray([]);
            var prev = ko.observable();
            var next = ko.observable();

            var callback = function (data) {
                historyList(data.data);
                prev(data.prev);
                next(data.next);
            }

            dataService.getSearchHistory(callback);
            var prevLink = function () {
                dataService.getPaginationData(prev(), callback);
            }

            var nextLink = function () {
                dataService.getPaginationData(next(), callback);
            }

            var deleteSearchHistory = function (data) {
                dataService.deleteHistory(data.url);
                historyList.remove();
            }

            return {
                historyList: historyList,
                prevLink: prevLink,
                nextLink: nextLink,
                deleteSearchHistory: deleteSearchHistory
            };
        }
    });

