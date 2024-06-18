import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

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

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDonorDto: UpdateDonorDto,
  ) {
    return await this.donorsService.update(+id, updateDonorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.donorsService.remove(+id);
  }
}
