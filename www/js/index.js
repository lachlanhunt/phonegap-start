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
        "deviceready",
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
        "endcallbutton"
    ],


    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        for (var i = 0; i < app.handlers.length; i++) {
            var id = app.handlers[i];
            document.addEventListener(id, app.createEventHandler(id), false);
        }
    },

    createEventHandler: function(id) {
        console.log("Creating event listener: " + id);
        var p = document.createElement("p")
        p.id = id;
        p.textContent = id;
        document.querySelector(".app").appendChild(p);
        return function() {
            app.receivedEvent(id);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById(id).setAttribute('style', 'color:green;');
        console.log('Received Event: ' + id);
    }
};
