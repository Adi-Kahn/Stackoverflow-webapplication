﻿define(['knockout', 'dataservice', 'postman', 'config'],
    function (ko, dataService, postman, config) {
        return function () {
            var annotationList = ko.observableArray([]);
            var prev = ko.observable();
            var next = ko.observable();

            var callback = function (data) {
                annotationList(data.data);
                prev(data.prev);
                next(data.next);
            }

            dataService.getAnnotation(callback);


            var prevLink = function () {
                dataService.getPaginationData(prev(), callback);
            }

            var nextLink = function () {
                dataService.getPaginationData(next(), callback);
            }

            return {
                annotationList: annotationList,
                prevLink: prevLink,
                nextLink: nextLink
            };
        }
    });

