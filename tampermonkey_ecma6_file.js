// ==UserScript==
// @name         Service Center Tools
// @namespace    ServiceCenterToolkit
// @version      0.1
// @description  Set of tools to work with OutSystems Service Center
// @author       silvasaraiva@gmail.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @require      http://code.jquery.com/jquery-latest.js
// @match        http*://*/ServiceCenter/Solution_Publish*
// @match        http*://*/ServiceCenter/eSpace_Publish*
// @grant        none
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */

window.eval("if(typeof(ServiceCenterTools) === 'undefined') {ServiceCenterTools = {}}");
    
ServiceCenterTools = {
    createServiceCenterToolsButton: function () {
        $('td.PageBody .Heading1').append('<div class="ServiceCenterTools"><div class="ToolsCaption">Service Center Tools</div><div class="sctOptions"></div></div>');
    },
    addControls: function() {
        /* Compact View */
        if($('.FakeWinDialog #MessagesTable').length) {
            /* Compact View */
            $('div.ServiceCenterTools > div.sctOptions').append('<a href="javascript:ServiceCenterTools.toggleMessageCompactView();">Toggle Compact View</a>');
            $('.FakeWinDialog #MessagesTable').addClass('CompactView');
            
            /* Identify errors */
            $('div.ServiceCenterTools > div.sctOptions').append('<a href="javascript:ServiceCenterTools.identifyErrors();">Mark Errors</a>');
        }
    },
    toggleMessageCompactView: function() {
        $('.FakeWinDialog #MessagesTable').toggleClass('CompactView');
    },
    identifyErrors: function() {
        $("img[src*='icon_error_small.gif']").closest('tr').addClass('HasError');
    },
    init: function() {
        ServiceCenterTools.createServiceCenterToolsButton();
        ServiceCenterTools.addControls();
        
        if($('div.ServiceCenterTools > .sctOptions').is(':empty')) {
            $('div.ServiceCenterTools').addClass('Empty');
        }
    }
};

$(document).ready(function () {
    ServiceCenterTools.init();
});

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
