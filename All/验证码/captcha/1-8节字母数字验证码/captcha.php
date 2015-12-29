<?php 
      session_start();

      $image=imagecreatetruecolor(100, 30);
      $bgcolor=imagecolorallocate($image, 255, 255, 255);
      imagefill($image, 0, 0, $bgcolor);
      
      /*for($i=0;$i<4;$i++)//写数字
      {
      	$fontsize=6;//字体大小
      	$fontcolor=imagecolorallocate($image, rand(0,120), rand(0,120), rand(0,120));//字体颜色
        $fontcontent=rand(0,9);

        $x=($i*100/4)+rand(5,10);
        $y=rand(5,10);

       imagestring($image, $fontsize, $x, $y, $fontcontent, $fontcolor);

      } */
      
      $captch_code='';
      for($i=0;$i<4;$i++)//写字母数字混合体
      {
      	$fontsize=6;//字体大小
      	$fontcolor=imagecolorallocate($image, rand(0,120), rand(0,120), rand(0,120));//字体颜色
        
        $data='abcdefghijkmnpqrstuvwxy0123456789';
        $fontcontent=substr($data, rand(0,strlen($data)),1);
        $captch_code.=$fontcontent;

        $x=($i*25)+rand(5,10);
        $y=rand(5,10);

        imagestring($image, $fontsize, $x, $y, $fontcontent, $fontcolor);

      } 
      $_SESSION['authcode']=$captch_code;

      for ($i=0; $i < 200; $i++) //干扰点
      { 
      	$pointcolor=imagecolorallocate($image, rand(50,200), rand(50,200), rand(50,200));
      	imagesetpixel($image, rand(1,99), rand(1,29), $pointcolor);
      }
      
       for ($i=0; $i < 3; $i++) //线扰点
      { 
      	$linecolor=imagecolorallocate($image, rand(80,220), rand(80,220), rand(80,220));
      	imageline($image, rand(1,99), rand(1,29),rand(1,99), rand(1,29), $linecolor);
      }

      header('content-type: image/png');
      imagepng($image);

      imagedestroy($image);
      
?>