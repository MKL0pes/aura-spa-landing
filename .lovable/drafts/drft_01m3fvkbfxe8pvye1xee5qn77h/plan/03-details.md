# Detalhes técnicos

- Converter para MP4/H.264 com `faststart`, mantendo a proporção vertical original e reduzindo peso somente quando houver ganho real.
- Extrair a capa em JPEG otimizado de um trecho representativo do atendimento.
- Definir dimensões e proporção estáveis para evitar deslocamentos durante o carregamento.
- Usar somente os tokens visuais existentes e acrescentar estilos globais apenas se forem necessários aos controles do vídeo.
- Conferir a página em desktop e celular, incluindo carregamento do vídeo, aparência da capa, controles, links preservados e ausência de erros.
