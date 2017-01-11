import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(niza: any, keyword: string, args: Array<any>) {
    if (niza && keyword)
      return niza.filter((item: any) => {
        var contains = false;
        args.forEach(arg => {
          var obj =
              (arg.indexOf('.') == -1) ? item[arg] : this.objByString(item, arg);
          if (obj)
            if (obj.toLowerCase().indexOf(keyword.toLowerCase()) != -1)
              contains = true;
        });
        return contains;
      });
    else
      return niza;
  }

  objByString(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.'), i = 0;
    while (i < a.length) {
      if (o[a[i]]) {
        o = o[a[i]];
      }
      ++i;
    }
    return o.toString();
  }

}
