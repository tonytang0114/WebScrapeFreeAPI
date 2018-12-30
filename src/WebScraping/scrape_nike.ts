import cheerio from 'cheerio';
import request from 'request';
import {NikeModel} from '../models/nikeschema';
export default function() {
    request('https://www.nike.com.hk/man/shoe/list.htm?locale=en-gb&intpromo=language2001',
        (error: any, response: any, html: any) => {
        if (!error && response.statusCode === 200) {

            const NikeModels = new Array<NikeModel>();
            const $ = cheerio.load(html, {
                normalizeWhitespace: true,
            });

            $('span.up').each((i, el) => {
                NikeModels.push(new NikeModel($(el).text()));
            });

            $('dd.color666').each((i, el) => {
                NikeModels[i].setPrice($(el).text());
            });

            $('span.down').each((i, el) => {
                NikeModels[i].setType($(el).text());
            });

            $('ul.new-sublist-all').each((i, el) => {
                $(el).find('li').each((_, elem) => {
                    const item = $(elem).attr('class').trim();
                    NikeModels[i].pushColor(item);
                });
            });
        }
    });
}
