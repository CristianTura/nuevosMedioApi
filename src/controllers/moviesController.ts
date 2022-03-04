import { Request, Response } from 'express';

import pool from '../database'

class MoviesController {

  public async list (req: Request, res: Response) {
    const movies = await pool.query('SELECT * FROM data');
    res.json(movies)
  }

  public async getOne (req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const movies = await pool.query('SELECT * FROM data WHERE mov_id = ?', [id])
    if (movies.length > 0) {
      return res.json(movies[0])
    }
    res.status(404).json({text: "The movie doesn't exist"})
  }

  public async create (req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO data set ?', [req.body]);
    res.json({message: 'Game saved'});
  }

  public async update (req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE data set ? WHERE mov_id = ?', [req.body, id]);
    res.json({message: 'The was update'});
  }

  public async delete (req: Request, res: Response){
   const { id } = req.params;
   await pool.query('DELETE FROM data WHERE mov_id = ?', [id]);
   res.json({message: 'The movie was deleted'});
  }

}

const moviesController = new MoviesController();
export default moviesController