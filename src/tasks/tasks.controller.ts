import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get('/:id')
  @Render('home')
  root(@Param('id') id: string) {
    const tasks = [
      {
        tarefa: 'Fazer Artigo',
      },
      {
        tarefa: 'Gravar Aula',
      },
    ];

    return { tasks: tasks[parseInt(id)] };
  }
}
