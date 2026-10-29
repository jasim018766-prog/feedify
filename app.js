(function () {
  // অ্যাপ ডাউনলোডের লিংক তৈরি হলে এখানে বসাবেন (ফাঁকা থাকলে "ডাউনলোড নেই" লেখা দেখাবে)
  var DOWNLOAD_URL = "";
  var PACKAGE_NAME = "com.feedify.app";

  var openBtn = document.getElementById("openApp");
  var downloadBtn = document.getElementById("download");
  var note = document.getElementById("note");

  if (/Android/i.test(navigator.userAgent)) {
    openBtn.href = "intent://" + location.host + location.pathname +
      "#Intent;scheme=https;package=" + PACKAGE_NAME + ";end";
    openBtn.hidden = false;
  }

  if (DOWNLOAD_URL) {
    downloadBtn.href = DOWNLOAD_URL;
    downloadBtn.hidden = false;
  } else {
    note.hidden = false;
  }
})();
