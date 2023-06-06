import { Controller, Get, Post, Param, UploadedFile, UseInterceptors, BadRequestException, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/files.helper';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UseInterceptors(
    FileInterceptor(
      'file',
      {
        storage : diskStorage({
            destination : './static/uploads',
            filename : renameImage
        }),
        fileFilter : fileFilter
      }
    )
  )

  @Post('upload')
  uploadFile(@UploadedFile() file : Express.Multer.File) {

    if (!file) {
      throw new BadRequestException('Make sure file extension is valid')
    }

    // const secureUrl = `${process.env.HOST_API}/files/upload/${file.filename}`;
    const secureUrl = `https://api-back-recette.onrender.com/api/v1/files/upload/${file.filename}`;


    return { secureUrl };
  }

  @Get('upload/:imageName')
  findUserImage(
    @Res() res: Response,
    @Param('imageName') imageName: string){
      const path = this.filesService.getStaticUserImage(imageName);
      res.sendFile(path);
      
    }

}
