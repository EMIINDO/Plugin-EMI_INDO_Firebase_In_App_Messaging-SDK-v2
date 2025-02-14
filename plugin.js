"use strict";
// Porting BY EMI INDO with c3addon-ide-plus
{

    const PLUGIN_ID = "EMI_INDO_Firebase_In_App_Messaging";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.1";
    const PLUGIN_CATEGORY = "web";

    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_Firebase_In_App_Messaging = class Firebase_In_App_MessagingPlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("EMI_INDO");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);

           // this._info.SetSupportedRuntimes(["c3"]);

            const VARIOS = new SDK.PluginProperty("text", "IOS-FIREBASE-INAPPMESSAGING-VERSION", "7.0.0");
            const VARANDROID = new SDK.PluginProperty("text", "ANDROID-FIREBASE-INAPPMESSAGING-VERSION", "19.1.+");


            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("group", "Variable-Config"),
                VARIOS,
                VARANDROID

            ]);


            this._info.AddCordovaPluginReference(
                {
                    id: "cordova-plugin-firebase-inappmessaging",
                    version: "4.0.0",
                    plugin: this,
                    variables: [
                        ["IOS_FIREBASE_INAPPMESSAGING_VERSION", VARIOS],
                        ["ANDROID_FIREBASE_INAPPMESSAGING_VERSION", VARANDROID]
                    ]
                });

            this._info.AddCordovaPluginReference(
                {
                    id: "cordova-plugin-firebase-analytics",
                    version: "~5.0.0"
                });



            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}