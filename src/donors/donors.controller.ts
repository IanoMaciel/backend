import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards 
} from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) { }

  @Post()
  async create(@Body() createDonorDto: CreateDonorDto) {
    return await this.donorsService.create(createDonorDto);
  }

  @Get()
  async findAll() {
    return await this.donorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.donorsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDonorDto: UpdateDonorDto,
  ) {
    return await this.donorsService.update(+id, updateDonorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.donorsService.remove(+id);
  }
}
