---------------------------------------
AppMobiWP8AccelerometerTemplate Readme:
---------------------------------------


This template will pull down an AppMobiPage.xaml and the necessary HTML content placed in a HTML folder.  

* You will need to update the WMAppManifest.xml in the Properties folder.  Change the Navigation Page to AppMobiPage.xaml.
The default appMobi splash screen is located in the Assets directory.  You will need to replace ours with your own custom one for 
landscape and portrait.

AppMobiWebSource.xml:
   This file is used to list all the files to be loaded into isolated storage for navigating in the WebBrowser.

   

Documentation	-  http://www.appmobi.com/documentation/index.php?DOC=JQMOBI_KS_WP8  
				-  http://www.jqmobi.com/

Video			-  http://youtu.be/L_tz3juWzTk

jqMobi github	- https://github.com/appMobi/jQ.Mobi
				- Go here to check for bug fixes and updates

Other appMobi WP8 Templates:
    Install-Package AppMobiWP8HelloWorldTemplate
	Install-Package AppMobiWP8SampleGameTemplate
	Install-Package AppMobiWP8SimpleJqMobiTemplate
	Install-Package AppMobiWP8JqMobiKitchenSinkTemplate
	Install-Package AppMobiWP8AccelerometerTemplate
	Install-Package AppMobiWP8CameraTemplate


Developr Notes:
   html/_appMobi/window.js	- overwrites the alert, onerror event, console.log, console.warn, console.error.  Remove the script 
		include in the index.html to revert back to device defaults.