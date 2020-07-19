<?php
    $formatos = array('.jpg','.png','.doc','.pdf','.xlsx');
    $directorio = 'archivos';
    if(isset($_POST['boton'])){
        $nombreArchivo = $_FILES['archivo']['name'];
        $nombreTmp = $_FILES['archivo']['tmp_name'];
        $ext = substr($nombreArchivo, strrpos($nombreArchivo,'.'));
        if(in_array($ext, $formatos)){
            if(move_uploaded_file($nombreArchivo, 'archivos/'.$nombreArchivo")){
                echo "<script>alert('Archivo subido correctamente')</script>";
                echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
            }else {
                echo "<script>alert('El archivo no se pudo subir')</script>";  
                echo "<script> setTimeout(\"location.href='presupuesto.html'\",1000)</script>";           
            }

        }else{
            echo "formato no permitido. SOLO(jpg, png, doc, pdf, xsls)"
        }
    }
?>