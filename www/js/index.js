/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    handlers: [
        "pause",
        "resume",
        "online",
        "offline",
        "backbutton",
        "batterycritical",
        "batterylow",
        "batterystatus",
        "menubutton",
        "searchbutton",
        "startcallbutton",
        "endcallbutton",
        "volumedownbutton",
        "volumeupbutton"
    ],


    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        for (var i = 0; i < app.handlers.length; i++) {
            var id = app.handlers[i];
            document.addEventListener(id, app.createEventHandler(id), false);
        }

        app.remote = window.open({"remote.html",  '_blank', 'location=yes');
        app.remote.addEventListener("loadstart", function() {
            alert("Load started");
            document.querySelector("#loadstart").textContent("Load started");

            app.remote.executeScript({file:"js/messages.js"}, function(port) {
                port.postMessage("Hello World!")
                alert("Posting message to " + port);
            });
        });
    },

    createEventHandler: function(id) {
        return function() {
            app.receivedEvent(id);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
