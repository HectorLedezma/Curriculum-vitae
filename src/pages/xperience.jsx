import React from "react";

import hsp from '../assets/hsp.png'
import pab from '../assets/pab.png'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Xp(){

    const Acordion = ({children, ...props}) =>{
        return(
            <Accordion className="Accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span" style={{fontWeight:"bold"}}>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="Accordion-Details">
                    {children}
                </AccordionDetails>
            </Accordion>
        )
    }

    return(
        <div>
            <div className="box">
                <div className="box-content">
                    <div> 
                        <p style={{fontWeight:"bold"}}>Hospital San Pablo de Coquimbo, Desarrollador de software <br /></p>
                        Mayo 2024 – Agosto 2024 <br />
                        <p>
                            Se deasrrollo un sistema con React.js para las pantallas en sala de espera del sector policlinico; este entrega información a los pacientes en sala, acerca del estado de la cita que tienen con su respectivo medico, en que sala se encuentra y cuanto falta para ser atendido.
                        </p>
                        <Acordion title="Tareas realizadas">
                            <ul>
                                <li>
                                    Desarrollo de software para las pantallas en sala de espera de
                                    policlínicos, capaz de mostrar los pacientes que serán
                                    prontamente atendidos.
                                </li>
                                <li>
                                    Recopilación de requisitos mediante reuniones con el
                                    departamento de Enfermería y TIC del hospital.
                                </li>
                                <li>
                                    Planificación estructural de software mediante UML y Mockups.
                                </li>
                                <li>
                                    Construcción de entregables utilizando React JS, CSS y Bootstrap.
                                </li>
                                <li>
                                    Gestión de software de versiones GIT desplegado en repositorio
                                    GitHub
                                </li>
                                <li>
                                    Coordinación técnica con el equipo de informática y seguridad de
                                    datos del hospital.
                                </li>
                                <li>
                                    Trabajo en modalidad semipresencial.
                                </li>
                            </ul>
                        </Acordion>
                    </div>
                </div>
                <div className="box-content">
                    <div>
                        <div className="box-image-content">
                            <img style={{height:"100%"}} className="image-content" src={hsp} alt="logo1" />
                        </div>
                        <div>
                            <Acordion title="Referencias:">
                                <p>Jorge Varas Leon</p>
                                <ul>
                                    <li>
                                    Ingeniero en informática, Hospital San Pablo de Coquimbo
                                    </li>
                                    <li>
                                    Correo: jorge.varas@redsalud.gob.cl
                                    </li>
                                    <li>
                                    Teléfono: +56 9 4560 5670
                                    </li>
                                </ul>
                            </Acordion>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <div>
                        <div className="box-image-content">
                            <img style={{height:"100%"}} className="image-content" src={pab} alt="logo1" />
                        </div>
                        <Acordion title="Referencias">
                            <p>Juan Mamani Charcas</p>
                            <ul>
                                <li>
                                Jefe de Proyectos, Aprendo Bien
                                </li>
                                <li>Correo: jmamani@aprendobien.cl</li>
                                <li>Teléfono: +56 9 7587 3216</li>
                            </ul>
                        </Acordion>
                    </div>
                </div>
                <div className="box-content">
                    <div> 
                        <p style={{fontWeight:"bold"}}>Proyecto Aprendo Bien, Practicante Desarrollador Front-end <br /></p>
                        Enero 2023 – Agosto 2023 <br />
                        
                        <p>Desarrollo front-end para la nueva versión del sitio web oficial. se construyó un modulo para mostrar guías con ejercicios matemáticos generados aleatoriamente. </p>
                        <Acordion title="Tareas realizadas">
                            <ul>
                                <li>
                                    Diseño y desarrollo de algoritmos para la generación automática
                                    de ejercicios matemáticos basados en JSON e integrados en la
                                    interfaz gráfica.
                                </li>
                                <li>
                                    Desarrollo de front-end y refactorización de código.
                                </li>
                                <li>
                                    Maquetación de prototipos.
                                </li>
                                <li>
                                    Gestión de software de versiones GIT desplegado en repositorio
                                    GITLAB.
                                </li>
                                <li>
                                    Desarrollo utilizando Framework React JS.
                                </li>
                                <li>
                                    Participación de reuniones virtuales colaborativas.
                                </li>
                            </ul>
                        </Acordion>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <div> 
                        <p style={{fontWeight:"bold"}}>Universidad Central, Ayudante académico.<br /></p>
                        Abril 2022 – Noviembre 2022<br />
                        Se realizaron sesiones de ayundantia a estudiantes de las asignaturas "Programación computacional" durante el 1er semestre y "Bases de datos" durante el segundo, durante estas sesiones se les hacia llegar a los alumnos, ejercicios formulados por el profesor de la correspondiente asignatura, como refuerzo en la materia enseñada en el plan de estudios.
                        <Acordion title="Tareas realizadas">
                            <ul>
                                <li>
                                    Sesiones de ejercicios prácticos para estudiantes de las
                                    asignaturas de “Programación computacional”, durante el primer
                                    semestre y “Bases de datos” en el segundo.
                                </li>
                                <li>
                                    El contenido de la sesiones era dado por el profesor titular de la
                                    respectiva asignatura.
                                </li>
                                <li>
                                    Los temas tratados en la asignatura “Programación
                                    computacional”, era lógica básica de algoritmos en lenguaje
                                    Python.
                                </li>
                                <li>
                                    En la asignatura “Bases de datos”, se reforzaba la estructura,
                                    lógica y herramientas relacionadas con las bases de datos SQL
                                    (Diagramas E-R, uso de Xampp y consultas básicas en MySQL).
                                </li>
                                <li>
                                    La modalidad de las sesiones eran virtuales, una vez por semana.
                                </li>
                            </ul>
                        </Acordion>
                    </div>
                </div>
                <div className="box-content">
                    <div>
                        <div className="box-image-content">
                            <img src="https://www.cdnlogo.com/logos/p/3/python.svg" alt="logo1" />
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png" alt="logo2" />
                        </div>
                        <div>
                            <Acordion title="Referencias:">
                                <p>Mario Ortiz Bonilla</p>
                                <ul>
                                    <li>
                                        Profesor de ingeniería civil e informática, Universidad Central
                                    </li>
                                    <li>
                                        Correo: mario.ortiz@ucentral.cl
                                    </li>
                                    <li>
                                        Teléfono: +56 9 8848 6150
                                    </li>
                                </ul>
                            </Acordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xp;