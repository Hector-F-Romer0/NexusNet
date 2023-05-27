import nodemailer from "nodemailer"
import * as dotenv from "dotenv";

const enviarMail = async (name, lastnames, email) => {
    try {
      const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 465,
        secure : true,
        auth: {
          user : process.env.USER_GMAIL,
          pass : process.env.PASSWORD_GMAIL,
        },
      });
  
      const mensaje = {
        from: process.env.USER_GMAIL,
        to: email,
        subject: '¡Bienvenido a nuestra comunidad de clientes y proveedores de servicios!',
        text: `Querido ${lastnames} ${name},
  
        ¡Gracias por unirte a nuestra aplicación de clientes y proveedores de servicio! Nos complace darte la bienvenida a nuestra comunidad, donde podrás conectar con profesionales, establecer relaciones comerciales y ampliar tus oportunidades laborales.
  
        En NexusNet, nos comprometemos a ofrecerte una plataforma segura y efectiva para que puedas aprovechar al máximo tus habilidades y experiencia. A continuación, te proporcionamos algunos detalles importantes para que puedas comenzar tu experiencia en nuestra aplicación:
  
        Completa tu perfil: Te animamos a que personalices tu perfil agregando información relevante sobre tu experiencia profesional, habilidades destacadas y formación académica. Un perfil completo y atractivo aumentará tus posibilidades de encontrar oportunidades interesantes y conectarte con otros profesionales.
  
        Explora la plataforma: Nuestra aplicación ofrece una amplia gama de funciones y características diseñadas para facilitar tu búsqueda de clientes o proveedores de servicio. Tómate un tiempo para explorar las distintas secciones, como la búsqueda de perfiles y mensajes directos. Además, puedes ajustar tus preferencias de notificación para recibir actualizaciones relevantes en tu bandeja de entrada.
  
        Mantén la interacción: Recuerda que el éxito en nuestra comunidad se basa en la participación activa. Participa en discusiones, comparte tus ideas y conocimientos, y ayuda a otros profesionales siempre que puedas. Cuanto más te involucres, más beneficios obtendrás de nuestra plataforma.
  
        Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos. Nuestro equipo de soporte estará encantado de ayudarte en todo lo que necesites.
  
        ¡Una vez más, bienvenido a nuestra comunidad de clientes y proveedores de servicio! Esperamos que tu experiencia en nuestra aplicación sea fructífera y satisfactoria. ¡Disfruta de todas las oportunidades que tenemos para ofrecerte!
  
        Atentamente,
  
        Enrique Manos Tijeras
        NexusNet
        Equipo de Atención al Cliente`,
      };
  
      const info = await transporter.sendMail(mensaje);
      console.log('Correo enviado a:', email, info.messageId);
  
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  
  }

  export { enviarMail }