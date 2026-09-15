import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const BANNERS = [
  // Modelo
  {
    id: 'vision-general',
    name: 'Visión General',
    watermark: 'VISIÓN GENERAL',
    src: 'public/bloque2.png',
    section: 'Modelo OneX'
  },
  {
    id: 'excelencia-integral',
    name: 'Excelencia Integral',
    watermark: 'EXCELENCIA INTEGRAL',
    src: 'public/contact-center-operations.jpg',
    section: 'Modelo OneX'
  },
  {
    id: 'modelo-onex',
    name: 'Modelo OneX',
    watermark: 'MODELO ONEX',
    src: 'public/operations-overview.jpg',
    section: 'Modelo OneX'
  },
  {
    id: 'ciclo-integralx',
    name: 'Ciclo IntegralX',
    watermark: 'CICLO INTEGRALX',
    src: 'public/boardroom-results-bg.jpg',
    section: 'Modelo OneX'
  },

  // Servicios
  {
    id: 'atencion-cliente',
    name: 'Atención al Cliente',
    watermark: 'ATENCIÓN AL CLIENTE',
    src: 'public/bloque4atencionalcliente.png',
    section: 'Servicios'
  },
  {
    id: 'ventas-fidelizacion',
    name: 'Ventas y Fidelización',
    watermark: 'VENTAS Y FIDELIZACIÓN',
    src: 'public/bloque4ventas.png',
    section: 'Servicios'
  },
  {
    id: 'backoffice-bpo',
    name: 'Back Office y BPO',
    watermark: 'BACK OFFICE Y BPO',
    src: 'public/bloque4backofice.png',
    section: 'Servicios'
  },
  {
    id: 'capacidades-integradas',
    name: 'Capacidades Integradas',
    watermark: 'CAPACIDADES INTEGRADAS',
    src: 'public/bloque4bots.png',
    section: 'Servicios'
  },
  {
    id: 'gestion-humana',
    name: 'Gestión Humana y Bienestar',
    watermark: 'GESTIÓN HUMANA',
    src: 'public/bloque4cobranzas.png',
    section: 'Servicios'
  },

  // Nosotros
  {
    id: 'quienes-somos',
    name: 'Quiénes Somos',
    watermark: 'QUIÉNES SOMOS',
    src: 'public/cultura2.png',
    section: 'Nosotros'
  },
  {
    id: 'fundamentos',
    name: 'Fundamentos Corporativos',
    watermark: 'FUNDAMENTOS',
    src: 'public/boardroom-results-bg.jpg',
    section: 'Nosotros'
  },
  {
    id: 'certificaciones',
    name: 'Certificaciones y Calidad',
    watermark: 'CERTIFICACIONES',
    src: 'public/executive-office.jpg',
    section: 'Nosotros'
  },
  {
    id: 'sostenibilidad',
    name: 'Sostenibilidad y RSE',
    watermark: 'SOSTENIBILIDAD',
    src: 'public/executive-office.jpg',
    section: 'Nosotros'
  },

  // Industrias
  {
    id: 'industrias',
    name: 'Industrias y Mercados',
    watermark: 'INDUSTRIAS',
    src: 'public/operations-overview.jpg',
    section: 'Industrias'
  },
  {
    id: 'telecomunicaciones',
    name: 'Telecomunicaciones',
    watermark: 'TELECOMUNICACIONES',
    src: 'public/telecomunicaciones.png',
    section: 'Industrias'
  },
  {
    id: 'retail',
    name: 'Retail y eCommerce',
    watermark: 'RETAIL & ECOMMERCE',
    src: 'public/retail.png',
    section: 'Industrias'
  },
  {
    id: 'salud',
    name: 'Salud y Farma',
    watermark: 'SALUD & FARMA',
    src: 'public/salud.png',
    section: 'Industrias'
  },
  {
    id: 'seguros',
    name: 'Seguros y Asistencias',
    watermark: 'SEGUROS & ASISTENCIA',
    src: 'public/seguros.png',
    section: 'Industrias'
  },
  {
    id: 'movilidad',
    name: 'Movilidad y Logística',
    watermark: 'MOVILIDAD & LOGÍSTICA',
    src: 'public/movilidad.png',
    section: 'Industrias'
  },
  {
    id: 'tecnologia',
    name: 'Tecnología y SaaS',
    watermark: 'TECNOLOGÍA & SAAS',
    src: 'public/tecnologia.png',
    section: 'Industrias'
  },
  {
    id: 'energia',
    name: 'Energía y Utilities',
    watermark: 'ENERGÍA & UTILITIES',
    src: 'public/energia.png',
    section: 'Industrias'
  },

  // Contacto & Carreras
  {
    id: 'contacto',
    name: 'Contacto Corporativo',
    watermark: 'CONTACTO',
    src: 'public/boardroom-results-bg.jpg',
    section: 'Contacto'
  },
  {
    id: 'carreras',
    name: 'Trabaja con Nosotros',
    watermark: 'CARRERAS',
    src: 'public/cultura1.png',
    section: 'Carreras'
  }
];

const outDirs = [
  'public/banners',
  'public/banners/sin-texto',
  'public/banners/con-marca'
];

for (const d of outDirs) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

// Create the gradient mask once
const maskPath = 'public/banners/.mask_temp.png';
const fadedPath = 'public/banners/.faded_temp.png';

console.log('Creando máscara de gradiente suave...');
execSync(`convert -size 1152x480 gradient:black-white -evaluate pow 1.15 ${maskPath}`);

for (const item of BANNERS) {
  if (!fs.existsSync(item.src)) {
    console.warn(`Archivo origen no encontrado: ${item.src}`);
    continue;
  }

  console.log(`Generando banner: ${item.name} (${item.id})...`);

  // Step 1: Resize source image and apply fade mask to left side
  execSync(
    `convert "${item.src}" -resize 1152x480^ -gravity center -extent 1152x480 "${maskPath}" -alpha off -compose CopyOpacity -composite "${fadedPath}"`
  );

  // Step 2: Composite onto #f8f9fa canvas on the right side
  // Target: SIN TEXTO (completely clean banner layout)
  const cleanPathDirect = `public/banners/banner-${item.id}-sin-texto.png`;
  const cleanPathSubdir = `public/banners/sin-texto/banner-${item.id}.png`;

  execSync(
    `convert -size 1920x480 xc:"#f8f9fa" "${fadedPath}" -gravity east -composite "${cleanPathDirect}"`
  );
  fs.copyFileSync(cleanPathDirect, cleanPathSubdir);

  // Step 3: Add the outlined watermark text
  // Calculate point size depending on text length
  let pointsize = 120;
  if (item.watermark.length > 20) pointsize = 85;
  else if (item.watermark.length > 15) pointsize = 98;
  else if (item.watermark.length > 11) pointsize = 108;

  const watermarkPathDirect = `public/banners/banner-${item.id}.png`;
  const watermarkPathSubdir = `public/banners/con-marca/banner-${item.id}.png`;

  execSync(
    `convert "${cleanPathDirect}" -font "Liberation-Sans-Bold" -pointsize ${pointsize} -fill none -stroke "#cbd5e1" -strokewidth 2 -gravity northwest -annotate +80+135 "${item.watermark}" "${watermarkPathDirect}"`
  );
  fs.copyFileSync(watermarkPathDirect, watermarkPathSubdir);
}

// Clean up temporary files
if (fs.existsSync(maskPath)) fs.unlinkSync(maskPath);
if (fs.existsSync(fadedPath)) fs.unlinkSync(fadedPath);

console.log('¡Todos los banners han sido generados exitosamente!');
