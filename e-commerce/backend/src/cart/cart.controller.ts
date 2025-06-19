import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':userId')
  getCart(@Param('userId') userId: string) {
    return this.cartService.getCartByUser(+userId);
  }

  @Post(':userId/add')
  addItem(@Param('userId') userId: string, @Body() dto: CreateCartItemDto) {
    return this.cartService.addItem(+userId, dto);
  }

  @Patch('item/:itemId')
  updateItem(@Param('itemId') itemId: string, @Body() dto: UpdateCartItemDto) {
    return this.cartService.updateItem(+itemId, dto);
  }

  @Delete('item/:itemId')
  removeItem(@Param('itemId') itemId: string) {
    return this.cartService.removeItem(+itemId);
  }
}
