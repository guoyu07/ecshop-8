var dialog = window.parent ;
var oEditor = dialog.InnerDialogLoaded() ;
var FCK = oEditor.FCK ;
var FCKLang = oEditor.FCKLang ;
var FCKConfig = oEditor.FCKConfig ;
var FCKDebug = oEditor.FCKDebug ;
var FCKTools = oEditor.FCKTools ;

//创建在dialog中显示的tab
// dialog.AddTab('Info', "上传") ;
dialog.AddTab('Upload', "上传") ;
dialog.AddTab('Config', "配置");

//切换动作,回调
function OnDialogTabChange(tabCode){
	// ShowE('divInfo', (tabCode == 'Info'));
	ShowE('divUpload', (tabCode == 'Upload'));
	ShowE('divConfig', (tabCode == 'Config'));
}

//加载预定动作
window.onload = function(){
	//应用配置的处理url
	GetE('nanoyunConfig').action = FCKConfig.BasePath + 'plugins/nanoyun/php/editconfig.php';
	//上传文件url
	// GetE('nanoyunUpload').action = FCKConfig.BasePath + 'plugins/nanoyun/php/upload.php';

	//刷新
	dialog.SetAutoSize( true ) ;
	//首选控件
	// SelectField( 'txtUrl' ) ;

	dialog.SetOkButton(true) ;
    ShowE('divUpload', true);
}

// Activate the "OK" button.

function Ok() {
    SetEditorContents();
    return true;
}

function SetEditorContents() {
    var fileList = document.getElementById("uploadedimgs").value;
    fileList = fileList.substr(0, fileList.length - 1);
    var filePath ='';
    var strs = fileList.split(',');
    var html = "";
    for (i = 0; i < strs.length; i++) {

        html += "<img src=" + filePath + strs[i] + "\><br>";

    }
    // var Editor = window.parent.InnerDialogLoaded().FCK;
    // Editor.InsertHtml(html);
    FCK.InsertHtml( html )
    // alert(document.getElementById("uploadedimgs"));
}

function CheckUpload(){
	return true;
}