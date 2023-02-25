import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { LoginController } from './auth/login.controller';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { ToolsModule } from './tools/tools.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { BadgesModule } from './badges/badges.module';
import { EncryptService } from './tools/encrypt.service';
import { MenusModule } from './menus/menus.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { FilesModule } from './files/files.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://bonappetit:ODx3b6esFKfK6BIq@cluster0.5wrixjh.mongodb.net/?retryWrites=true&w=majority"),
    RecipesModule,
    UsersModule,
    AuthModule,
    ToolsModule,
    IngredientsModule,
    ShoppingListModule,
    BadgesModule,
    MenusModule,
    FilesModule,
 ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
