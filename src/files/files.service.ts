import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
    getStaticUserImage(imageName:string) {
        const path = join(__dirname, '../../static/uploads',imageName);
        if (!existsSync(path)){
            throw new BadRequestException('No image found in this directory')
        }
        return path;
    }
}
