var constants = {};

get_url = get_url_function("voto");

function load_ready_msg(){
    send('document_ready');
}

function set_constants(data){
    constants = data;
    popular_header();
    place_text(data.i18n);
    place_text(data.encabezado);
    if(!constants.mostrar_cursor){
        $("body").css("cursor", "none");
    }
}

function change_screen(pantalla){
    func = window[pantalla[0]];
    func(pantalla[1]);
}
