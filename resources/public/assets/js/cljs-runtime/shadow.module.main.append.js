
shadow.cljs.devtools.client.env.module_loaded('main');

try { frontend.core.init(); } catch (e) { console.error("An error occurred when calling (frontend.core/init)"); throw(e); }