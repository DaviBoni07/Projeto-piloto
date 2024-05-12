import React from 'react';
import './atendimento1.css';
//import imagemUsuario from "/images/user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



function AtendimentolistadeCVT() {
  return (
   
   <body className='pagina'>
    <section className="sectionUser">
    <div className="user">
    <div className="center">
      <img src="/images/user.svg" alt="usuario" id='usuario' />


    </div> 
    </div>
    </section>
    <section className="sidebar">
      <div className="center">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" id='logo' />
        </div>
        <div className="abas">
        <div className="clientes">
          <img src="/images/clientes.svg" alt="icone clientes" id='img_cliente' />
          <p>Clientes</p>
        </div>
        <div className="atendimento">
          <img src="/images/clipboard.svg" alt="icone atendimento" id='img_atendimento' />
          <p>Atendimento</p>
        </div>
        <div className="gerencia">
          <img src="/images/gerencia.svg" alt="icone gerencia" id='img_gerencia' />
          <p>Gerência</p>
        </div>
        <div className="config">
          <img src="/images/config.svg" alt="icone configurações" id='img_config' />
          <p>Configurações</p>
        </div>
        <div className="logout">
          <FontAwesomeIcon icon={faRightFromBracket} id='img_logout' />
          <p>Sair</p>
        </div>
        </div>
       
      </div>
    </section>

    <section className="content">
      <div className="center">
        
          <div className="titulo1">
          <p>Atendimento - CVTs</p>
          </div>
          <div className="filtros">
            <div className="periodo">
              <img src="/images/calendario.svg" alt="" id='calendario' />
              <p>Período</p>
              <img src="images/setabaixo.svg" alt="" id='seta' />
              </div>
              <div className="status">
              <img src="/images/status.svg" alt="" />
              <p>Status</p>
              <img src="images/setabaixo.svg" alt="" id='seta' />
                </div>
                <div className="rota">
                <img src="/images/rota.svg" alt="" />
              <p>Rota</p>
              <img src="images/setabaixo.svg" alt="" id='seta' />
                  </div>
                  <div className="busca">
                 <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> 
             </span>
                    </div>         
          </div>
        </div>
     
   

    <section className="rotulos">
      <div className="center">
        <div className="box-rotulos">
          <div className="rota-rotulo">
            <p>Rota</p>
          </div>
          <div className="num">
            <p>Número</p>
          </div>
          <div className="data">
            <p>Data</p>
          </div>
          <div className="cliente">
            <p>Cliente</p>
          </div>
          <div className="tecnico">
            <p>Técnico</p>
          </div>
          <div className="visita">
            <p>Visita</p>
          </div>
          <div className="duracao">
            <p>Duração da visita</p>
          </div>
        </div>
      </div>
    </section>

    <section className="listacvt">
      <div className="center">
        <div className="bloco">
        <div className="infos1">
          
          <div className="rota-info">
            <p>C</p>
          </div>
          <div className="numero-info">
            <p>N° 23225</p>
          </div>
          <div className="data-info">
            <p>05/02/2024</p>
          </div>
          <div className="cliente-info">
            <p>Ed. Sabará</p>
          </div>
          <div className="tecnico-info">
            <p>Bruno</p>
          </div>
          <div className="visita-info">
            <p>Preventiva</p>
          </div>
          <div className="duracao-info">
            <p>---</p>
          </div>
          <div className="trespontos">
          <FontAwesomeIcon icon={faEllipsisVertical} id='pontos' />
          </div>
        </div>
        </div>
      <div className="bloco">
        <div className="infos1">
          
          <div className="rota-info2">
            <p>A</p>
          </div>
          <div className="numero-info">
            <p>N° 44225</p>
          </div>
          <div className="data-info">
            <p>03/02/2024</p>
          </div>
          <div className="cliente-info">
            <p>Ed. Marco Novo</p>
          </div>
          <div className="tecnico-info">
            <p>Pedro</p>
          </div>
          <div className="visita-info">
            <p>Chamado</p>
          </div>
          <div className="duracao-info">
            <p>2h30m</p>
          </div>
          <div className="trespontos">
          <FontAwesomeIcon icon={faEllipsisVertical} id='pontos' />
          </div>
        </div>
        </div>

        <div className="bloco">
        <div className="infos1">
          
          <div className="rota-info3">
            <p>B</p>
          </div>
          <div className="numero-info">
            <p>N° 11225</p>
          </div>
          <div className="data-info">
            <p>01/02/2024</p>
          </div>
          <div className="cliente-info">
            <p>Cond. Ed. Albatroz</p>
          </div>
          <div className="tecnico-info">
            <p>Carlos</p>
          </div>
          <div className="visita-info">
            <p>Preventiva</p>
          </div>
          <div className="duracao-info">
            <p>1h48m</p>
          </div>
          <div className="trespontos">
          <FontAwesomeIcon icon={faEllipsisVertical} id='pontos' />
          </div>
        </div>
        </div>
        
        
        
      </div>
    </section>

    </section>
    
   </body>
  );
}

export default AtendimentolistadeCVT;
