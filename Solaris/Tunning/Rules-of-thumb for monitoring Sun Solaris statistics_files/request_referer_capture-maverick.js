function capture_referrer(){if(document.referrer&&document.referrer!=""){var E=document.referrer;var C=E;var A=C.search(/google\.com\/search/i);var D=C.search(/yahoo\.com\/search/i);var B=C.search(/ibm\.com\/Search/i);var F=C.search(/ibm\.com\/developerworks\/search/i);if(A!=-1){process_google(E)}else{if(D!=-1){process_yahoo(E)}else{if(B!=-1){process_IBM(E)}else{if(F!=-1){process_DW(E)}}}}}}function process_google(D){var C;var B=D.search(/q=/);var E=D.substring(B+2);var A=E.search(/&/);A=(A==-1)?E.length:A;
C=D.substring(B+2,B+2+A);if(C.length!=0){searchQuery(C)}}function process_yahoo(D){var C;var B=D.search(/p=/);var E=D.substring(B+2);var A=E.search(/&/);A=(A==-1)?E.length:A;C=D.substring(B+2,B+2+A);if(C.length!=0){searchQuery(C)}}function process_IBM(D){var C;var B=D.search(/q=/);var E=D.substring(B+2);var A=E.search(/&/);A=(A==-1)?E.length:A;C=D.substring(B+2,B+2+A);if(C.length!=0){searchQuery(C)}}function process_DW(D){var C;var B=D.search(/query=/);var E=D.substring(B+6);var A=E.search(/&/);A=(A==-1)?E.length:A;
C=D.substring(B+6,B+6+A);if(C.length!=0){searchQuery(C)}};
